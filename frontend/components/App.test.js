// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import langData from './path-to-package.json';

test('renders English texts correctly', () => {
  render(<App lang="en" />);

  // Check various texts
  expect(screen.getByText(langData.en.someText)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(langData.en.somePlaceholder)).toBeInTheDocument();
  expect(screen.getByLabelText(langData.en.someLabel)).toBeInTheDocument();

  // Add 13 tests for each "en" key
  // Example:
  expect(screen.getByText(langData.en.header)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(langData.en.searchPlaceholder)).toBeInTheDocument();
  // Continue for each text in your "en" JSON keys...
});

      // test('renders Spanish texts correctly', () => {
      //     render(<App lang="esp" />);
      //   
      //     // Check various texts
      //     expect(screen.getByText(langData.esp.someText)).toBeInTheDocument();
      //     expect(screen.getByPlaceholderText(langData.esp.somePlaceholder)).toBeInTheDocument();
      //     expect(screen.getByLabelText(langData.esp.someLabel)).toBeInTheDocument();
      //   
      //     // Add 13 tests for each "esp" key
      //     // Example:
      //     expect(screen.getByText(langData.esp.header)).toBeInTheDocument();test('renders Spanish texts correctly', () => {👉 test('renders Spanish texts correctly', () => {
        render(<App lang="esp" />);
      
        // Check various texts
        expect(screen.getByText(langData.esp.someText)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(langData.esp.somePlaceholder)).toBeInTheDocument();
        expect(screen.getByLabelText(langData.esp.someLabel)).toBeInTheDocument();
      
        // Add 13 tests for each "esp" key
        // Example:
        expect(screen.getByText(langData.esp.header)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(langData.esp.searchPlaceholder)).toBeInTheDocument();
        // Continue for each text in your "esp" JSON keys...
            // Add 13 tests for each "esp" key
            // Example:
            expect(screen.getByText(langData.esp.header)).toBeInTheDocument();
            expect(screen.getByPlaceholderText(langData.esp.searchPlaceholder)).toBeInTheDocument();
            // Continue for each text in your "esp" JSON keys...
  
          
        
          export const getEntriesByKeyPrefix = (obj, prefix) => {
            return Object.keys(obj)
              .filter((key) => key.startsWith(prefix))
              .reduce((acc, key) => {
                acc[key] = obj[key];
                return acc;
              }, {});
          };

test('getEntriesByKeyPrefix returns correct entries', () => {
  const obj = {
    'prefixKey1': 'value1',
    'prefixKey2': 'value2',
    'otherKey': 'value3',
  };
  const result = getEntriesByKeyPrefix(obj, 'prefix');
  expect(result).toEqual({
    'prefixKey1': 'value1',
    'prefixKey2': 'value2',
  });
});
 // App.test.js

// helper.test.js


