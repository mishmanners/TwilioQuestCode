function reverseSentence(sentence) {
    // Initial lowercase for the whole sentence to reset capitalization
    sentence = sentence.toLowerCase();

    // Extract punctuation if present
    const punctuationMatch = sentence.match(/[.,;:!?]$/);
    const punctuation = punctuationMatch ? punctuationMatch[0] : '';

    // Remove punctuation for processing
    sentence = sentence.replace(/[.,;:!?]$/, '');

    // Split, reverse, and join the sentence
    let words = sentence.split(" ");
    words = words.reverse();

    // Capitalize the first letter of the first word in the reversed array
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    // If the last word is not a proper noun or acronym, lowercase its first character
    // This step depends on your criteria for identifying proper nouns and acronyms
    // For simplicity, this example does not implement this check

    // Rejoin the words into a sentence and append any punctuation
    return words.join(" ") + punctuation;
}