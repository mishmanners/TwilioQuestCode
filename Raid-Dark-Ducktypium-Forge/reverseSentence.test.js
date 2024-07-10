import { describe, it, expect } from 'vitest';
import { reverseSentence } from './reverseSentenceCopilot';

describe('reverseSentence', () => {
  it('should reverse a simple sentence correctly', () => {
    const sentence = "Hello world!";
    const expected = "World hello!";
    expect(reverseSentence(sentence)).toEqual(expected);
  });

  it('handles sentences starting with "I" correctly', () => {
    const sentence = "I am learning JavaScript.";
    const expected = "JavaScript learning am I.";
    expect(reverseSentence(sentence)).toEqual(expected);
  });
});

describe('reverseSentence function tests', () => {
  it('should handle an empty string correctly', () => {
    const sentence = "";
    const expected = "";
    expect(reverseSentence(sentence)).toEqual(expected);
  });

  it('should handle a single word correctly', () => {
    const sentence = "Hello!";
    const expected = "Hello!";
    expect(reverseSentence(sentence)).toEqual(expected);
  });

  it('should handle punctuation within the sentence correctly', () => {
    const sentence = "Hello, world!";
    const expected = "World, hello!";
    expect(reverseSentence(sentence)).toEqual(expected);
  });

  it('should maintain proper nouns and acronyms capitalization', () => {
    const sentence = "NASA uses satellites.";
    const expected = "Satellites uses NASA.";
    expect(reverseSentence(sentence)).toEqual(expected);
  });

  it('should handle sentences with extra whitespace correctly', () => {
    const sentence = "Hello    world!";
    const expected = "World hello!";
    expect(reverseSentence(sentence)).toEqual(expected);
  });

  it('should handle sentences with numbers and special characters correctly', () => {
    const sentence = "The price is $5.99.";
    const expected = "$5.99 is price the.";
    expect(reverseSentence(sentence)).toEqual(expected);
  });

  it('should handle long sentences without performance issues', () => {
    const sentence = "This is a very long sentence to test the performance of the reverseSentence function.";
    const expected = "Function reverseSentence the of performance the test to sentence long very a is this.";
    expect(reverseSentence(sentence)).toEqual(expected);
  });
});