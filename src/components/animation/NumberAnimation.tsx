'use client';

import { cn } from '@/utils/cn';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface NumberAnimationProps {
  number: number;
  speed?: number;
  interval?: number;
  rooms?: number;
  space?: number | null;
  symbol?: boolean;
  className?: string;
  showPercentage?: boolean;
  heightSpaceRatio?: number;
  fontStyle?: React.CSSProperties;
  threshold?: number;
  rootMargin?: string;
  children?: React.ReactNode;
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({
  number,
  speed = 800,
  interval = 150,
  rooms = 2,
  space = null,
  symbol = false,
  className = '',
  showPercentage = false,
  heightSpaceRatio = 2.2,
  fontStyle = {},
  threshold = 0.5,
  rootMargin = '0px 0px -50px 0px',
  children,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const animate = (element: HTMLElement, properties: Record<string, string>, duration: number) => {
    const startTime = performance.now();
    const startValues: Record<string, number> = {};

    // Get initial values
    Object.keys(properties).forEach((prop) => {
      const computedStyle = getComputedStyle(element);
      startValues[prop] = parseFloat(computedStyle.getPropertyValue(prop)) || 0;
    });

    const animateFrame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      Object.keys(properties).forEach((prop) => {
        const startValue = startValues[prop];
        const endValue = parseFloat(properties[prop]);
        const currentValue = startValue + (endValue - startValue) * easeProgress;
        element.style.setProperty(prop, currentValue + (prop === 'top' ? 'px' : ''));
      });

      if (progress < 1) {
        requestAnimationFrame(animateFrame);
      }
    };

    requestAnimationFrame(animateFrame);
  };

  const initAnimation = useCallback(() => {
    if (!elementRef.current || isAnimated) {
      return;
    }

    const element = elementRef.current;
    const targetNumber = number;

    // Get the original text content to check for percentage from children or current content
    const originalText = children ? String(children) : element.textContent || '';
    const hasPercentageInOriginal = originalText.includes('%');

    // Use inherit by default to respect parent styles
    const defaultFontStyle: React.CSSProperties = {
      fontSize: 'inherit',
      color: 'inherit',
      ...fontStyle,
    };

    // Calculate single digit width
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.fontSize = defaultFontStyle.fontSize as string;
    element.style.color = 'rgba(0,0,0,0)';
    element.textContent = targetNumber.toString();

    const _height = element.offsetHeight;
    const calculatedSpace = space || _height / heightSpaceRatio;
    element.innerHTML = '';

    // Create number HTML
    let numberHtml = '';
    for (let i = 0; i < 10; i++) {
      const styleProps = Object.keys(defaultFontStyle)
        .map((key) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: inherit`)
        .join('; ');

      numberHtml += `<span style="display: block; width: ${calculatedSpace}px; height: ${_height}px; line-height: ${_height}px; ${styleProps}">${i}</span>`;
    }

    numberHtml = `<div class="_number" style="width: ${calculatedSpace}px; height: ${_height}px; line-height: ${_height}px; display: flex; align-items: center;"><div style="position: relative; width: ${calculatedSpace}px; height: ${_height}px; overflow: hidden;"><div style="position: absolute; width: 100%;">${numberHtml}</div></div></div>`;

    // Process number
    let numArr = String(targetNumber).split('');
    const hasPercentage = showPercentage || hasPercentageInOriginal;
    const _fillZero = !!rooms;

    if (_fillZero) {
      if (String(targetNumber).indexOf('.') !== -1) {
        rooms++;
      }
      for (let i = numArr.length; i < rooms; i++) {
        numArr.unshift('0');
      }
    }

    if (symbol) {
      // Handle thousand separator
      const appendHtml: string[] = [];
      const styleProps = Object.keys(defaultFontStyle)
        .map((key) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: inherit`)
        .join('; ');

      const symbolHtml = `<span style="display: block; width: ${calculatedSpace}px; height: ${_height}px; line-height: ${_height}px; text-align: center; ${styleProps}">,</span>`;
      const dotHtml = `<span style="display: block; width: ${calculatedSpace}px; height: ${_height}px; line-height: ${_height}px; text-align: center; ${styleProps}">.</span>`;

      const symbolDiv = `<div class="_number" style="width: ${calculatedSpace}px; height: ${_height}px; line-height: ${_height}px; display: flex; justify-content: center; align-items: center;"><div style="position: relative; width: ${calculatedSpace}px; height: ${_height}px; overflow: hidden;"><div style="position: absolute; width: 100%;">${symbolHtml}</div></div></div>`;
      const dotDiv = `<div class="_number" style="width: ${calculatedSpace}px; height: ${_height}px; line-height: ${_height}px; display: flex; justify-content: center; align-items: center;"><div style="position: relative; width: ${calculatedSpace}px; height: ${_height}px; overflow: hidden;"><div style="position: absolute; width: 100%;">${dotHtml}</div></div></div>`;

      const numarr = String(targetNumber).split('.');
      const re = /(-?\d+)(\d{3})/;
      while (re.test(numarr[0])) {
        numarr[0] = numarr[0].replace(re, '$1,$2');
      }
      numArr = (numarr.length > 1 ? numarr[0] + '.' + numarr[1] : numarr[0]).split('');

      for (let i = 0; i < numArr.length; i++) {
        if (isNaN(Number(numArr[i]))) {
          if (numArr[i] === '.') {
            appendHtml.push(dotDiv);
          } else {
            appendHtml.push(symbolDiv);
          }
        } else {
          appendHtml.push(numberHtml);
        }
      }
      element.innerHTML = appendHtml.join('');
    } else {
      element.innerHTML = numberHtml.repeat(rooms);

      // Handle decimal point
      if (String(targetNumber).indexOf('.') !== -1) {
        const numberElements = element.querySelectorAll('._number');
        const dotIndex = String(targetNumber).indexOf('.');
        if (numberElements[dotIndex]) {
          const spans = numberElements[dotIndex].querySelectorAll('span');
          if (spans[0]) {
            spans[0].innerHTML = '.';
          }
        }
      }

      // Handle percentage symbol
      if (hasPercentage) {
        const percentageSpan = document.createElement('span');
        percentageSpan.textContent = '%';
        percentageSpan.style.marginLeft = '2px';
        element.appendChild(percentageSpan);
      }
    }

    // Apply font styles
    Object.keys(defaultFontStyle).forEach((key) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      element.style.setProperty(cssKey, defaultFontStyle[key as keyof React.CSSProperties] as string);
    });

    // Animate numbers
    const domArr = element.querySelectorAll('._number');

    for (let i = 0; i < domArr.length; i++) {
      setTimeout(
        (dom, n) => {
          const innerDiv = dom.children[0].children[0] as HTMLElement;
          animate(
            innerDiv,
            {
              top: -_height * Number(n) + 'px',
            },
            speed,
          );
        },
        interval * (domArr.length - i),
        domArr[i],
        numArr[i],
      );
    }

    setIsAnimated(true);
  }, [
    isAnimated,
    number,
    speed,
    interval,
    rooms,
    space,
    symbol,
    showPercentage,
    heightSpaceRatio,
    fontStyle,
    children,
  ]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            initAnimation();
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [isAnimated, threshold, rootMargin, initAnimation]);

  return (
    <span ref={elementRef} className={cn('inline-block', className)} style={fontStyle}>
      {children || number}
    </span>
  );
};

NumberAnimation.displayName = 'NumberAnimation';

export default NumberAnimation;
