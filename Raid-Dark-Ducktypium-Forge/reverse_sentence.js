function reverseSentence(sentence) {

    // lowercase the first letter of the sentence
    sentence = sentence.charAt(0).toLowerCase() + sentence.slice(1);

    // split the sentence
    const sentenceArray = sentence.split(" ");

    // split the punctuation
    const punctuationArray = sentence.match(/[.,;:!?]/g);
    delete punctuationArray[punctuationArray.length - 1];

    // reverse the sentence and join it together
    const reversedSentence = sentenceArray.reverse().join(" ");
    
    // uppercase the first letter of the sentence
    return reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1) + punctuationArray;
}


/*
    Reverse words with no changes
    const lowerCaseWord = sentence.toLowerCase();
    const words = sentence.split(" ");
    const reversedWords = [];
    for (var i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }
    const reversedSentence = sentence.toUpperCase();
    return reversedWords.join(" "); */
