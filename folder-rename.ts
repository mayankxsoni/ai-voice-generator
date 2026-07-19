#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

interface RenameOptions {
  dryRun: boolean;
  path: string;
  mode: 'utb' | 'btu' | 'toggle' | null; // underscore-to-bracket, bracket-to-underscore, or toggle
}

interface FolderToRename {
  type: 'bracket-to-underscore' | 'underscore-to-bracket';
  oldPath: string;
  newPath: string;
  oldName: string;
  newName: string;
}

class FolderRenamer {
  private dryRun: boolean;
  private targetPath: string;
  private mode: 'utb' | 'btu' | 'toggle' | null;
  private changes: FolderToRename[] = [];
  private silent: boolean = false;

  constructor(options: RenameOptions, silent: boolean = false) {
    this.dryRun = options.dryRun;
    this.targetPath = options.path;
    this.mode = options.mode;
    this.silent = silent;
  }

  /**
   * Check if a folder name starts and ends with brackets
   */
  private isBracketFolder(folderName: string): boolean {
    return folderName.startsWith('[') && folderName.endsWith(']');
  }

  /**
   * Check if a folder name starts and ends with underscores
   */
  private isUnderscoreFolder(folderName: string): boolean {
    return folderName.startsWith('_') && folderName.endsWith('_');
  }

  /**
   * Convert bracket folder name to underscore format
   */
  private bracketToUnderscore(folderName: string): string {
    if (!this.isBracketFolder(folderName)) {
      return folderName;
    }
    // Remove brackets and wrap with underscores
    const innerName = folderName.slice(1, -1);
    return `_${innerName}_`;
  }

  /**
   * Convert underscore folder name to bracket format
   */
  private underscoreToBracket(folderName: string): string {
    if (!this.isUnderscoreFolder(folderName)) {
      return folderName;
    }
    // Remove underscores and wrap with brackets
    const innerName = folderName.slice(1, -1);
    return `[${innerName}]`;
  }

  /**
   * Scan directory recursively for folders that need renaming
   */
  private scanDirectory(dirPath: string): FolderToRename[] {
    const folders: FolderToRename[] = [];

    try {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });

      for (const item of items) {
        if (item.isDirectory()) {
          const folderName = item.name;
          const fullPath = path.join(dirPath, folderName);

          // Determine what needs to be renamed based on mode
          let shouldRename = false;
          let newName = '';
          let renameType: 'bracket-to-underscore' | 'underscore-to-bracket' | null = null;

          if (this.mode === 'utb' && this.isUnderscoreFolder(folderName)) {
            // Underscore to bracket mode - only rename underscore folders
            shouldRename = true;
            renameType = 'underscore-to-bracket';
            newName = this.underscoreToBracket(folderName);
          } else if (this.mode === 'btu' && this.isBracketFolder(folderName)) {
            // Bracket to underscore mode - only rename bracket folders
            shouldRename = true;
            renameType = 'bracket-to-underscore';
            newName = this.bracketToUnderscore(folderName);
          } else if (this.mode === 'toggle' || this.mode === null) {
            // Toggle mode - rename whatever matches
            if (this.isBracketFolder(folderName)) {
              shouldRename = true;
              renameType = 'bracket-to-underscore';
              newName = this.bracketToUnderscore(folderName);
            } else if (this.isUnderscoreFolder(folderName)) {
              shouldRename = true;
              renameType = 'underscore-to-bracket';
              newName = this.underscoreToBracket(folderName);
            }
          }

          if (shouldRename && renameType) {
            folders.push({
              type: renameType,
              oldPath: fullPath,
              newPath: path.join(dirPath, newName),
              oldName: folderName,
              newName: newName,
            });
          }

          // Recursively scan subdirectories
          const subFolders = this.scanDirectory(fullPath);
          folders.push(...subFolders);
        }
      }
    } catch (error) {
      if (!this.silent) {
        console.error(`Error scanning directory ${dirPath}:`, (error as Error).message);
      }
    }

    return folders;
  }

  /**
   * Rename a folder
   */
  private renameFolder(oldPath: string, newPath: string): boolean {
    try {
      fs.renameSync(oldPath, newPath);
      return true;
    } catch (error) {
      if (!this.silent) {
        console.error(`Error renaming ${oldPath} to ${newPath}:`, (error as Error).message);
      }
      return false;
    }
  }

  /**
   * Execute the renaming process
   */
  public async execute(): Promise<void> {
    if (!this.silent) {
      console.log(`🔍 Scanning directory: ${this.targetPath}`);
    }

    // Check if the target directory exists
    if (!fs.existsSync(this.targetPath)) {
      if (!this.silent) {
        console.error(`❌ Error: Directory ${this.targetPath} does not exist.`);
        console.error(`Please make sure you're running this script from the project root.`);
      }
      process.exit(1);
    }

    const foldersToRename = this.scanDirectory(this.targetPath);

    if (foldersToRename.length === 0) {
      if (!this.silent) {
        console.log('✅ No folders found that need renaming.');
      }
      return;
    }

    if (!this.silent) {
      console.log(`\n📁 Found ${foldersToRename.length} folder(s) to rename:`);

      // Display what will be changed
      foldersToRename.forEach((folder, index) => {
        const arrow = folder.type === 'bracket-to-underscore' ? '→' : '←';
        const relativePath = path.relative(this.targetPath, folder.oldPath);
        const parentDir = path.dirname(relativePath);
        const displayPath = parentDir === '.' ? '' : `${parentDir}/`;
        console.log(`  ${index + 1}. ${displayPath}${folder.oldName} ${arrow} ${folder.newName}`);
      });
    }

    if (this.dryRun) {
      if (!this.silent) {
        console.log('\n🔍 DRY RUN MODE - No actual changes made');
      }
      return;
    }

    // User permission check removed - proceed directly with renaming

    // Perform the renaming
    if (!this.silent) {
      console.log('\n🔄 Renaming folders...');
    }
    let successCount = 0;
    let errorCount = 0;

    for (const folder of foldersToRename) {
      if (this.renameFolder(folder.oldPath, folder.newPath)) {
        if (!this.silent) {
          console.log(`✅ Renamed: ${folder.oldName} → ${folder.newName}`);
        }
        successCount++;
      } else {
        if (!this.silent) {
          console.log(`❌ Failed to rename: ${folder.oldName}`);
        }
        errorCount++;
      }
    }

    if (!this.silent) {
      console.log(`\n📊 Summary:`);
      console.log(`  ✅ Successfully renamed: ${successCount}`);
      console.log(`  ❌ Failed to rename: ${errorCount}`);
      console.log(`  📁 Total processed: ${foldersToRename.length}`);
    }
  }
}

// Parse command line arguments
function parseArgs(): RenameOptions {
  const args = process.argv.slice(2);
  const options: RenameOptions = {
    dryRun: false,
    path: './src/app',
    mode: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--utb':
        options.mode = 'utb';
        break;
      case '--btu':
        options.mode = 'btu';
        break;
      case '--help':
        console.log(`
Folder Rename Script

This script renames folder names between [brackets] and _underscores_.
Specifically designed for Next.js app directory structure.

Usage:
  yarn rename-folders [options]

Options:
  --dry-run       Show what would be renamed without actually renaming
  --utb           Underscore to bracket: _folder_ → [folder]
  --btu           Bracket to underscore: [folder] → _folder_
  --help          Show this help message
  --path          Specify the directory to scan (default: ./src/app)

Examples:
  yarn rename-folders                    # Toggle all folders (default behavior)
  yarn rename-folders --utb              # Convert _folder_ to [folder]
  yarn rename-folders --btu              # Convert [folder] to _folder_
  yarn rename-folders --dry-run         # Preview changes without renaming

Folder naming rules:
  [folder] → _folder_                   # Brackets to underscores
  _folder_ → [folder]                   # Underscores to brackets

Note: This script is optimized for Next.js dynamic routes in the app directory.
        `);
        process.exit(0);
        break;
      case '--path':
        if (i + 1 < args.length) {
          options.path = args[i + 1];
          i++; // Skip next argument as it's the path value
        } else {
          console.error('Error: --path requires a directory path');
          process.exit(1);
        }
        break;
      default:
        if (arg.startsWith('--')) {
          console.error(`Error: Unknown option ${arg}`);
          console.error('Use --help for usage information');
          process.exit(1);
        }
        break;
    }
  }

  return options;
}

// Main execution
async function main(): Promise<void> {
  try {
    const options = parseArgs();
    // Silent mode for postinstall script
    const isSilent = process.env.SILENT_RENAME === 'true';
    const renamer = new FolderRenamer(options, isSilent);
    await renamer.execute();
  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
    process.exit(1);
  }
}

// Run the script
main();

export default FolderRenamer;
