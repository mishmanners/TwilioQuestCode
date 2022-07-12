function reverseSentence(sentence) {

    // one line reverse with no other changes
    // reverseSentence = sentence.split(" ").reverse().join(" ");

    // lowercase the first letter of the sentence if it's not an I
    if (sentence.charAt(0) !== "I") {
    sentence = sentence.charAt(0).toLowerCase() + sentence.slice(1);
    }

    // split the sentence
    const sentenceArray = sentence.split(" ");

    // split the punctuation
    const punctuationArray = sentence.match(/[.,;:!?]/g);
    // remove punctuation from the sentence
    sentence = sentence.replace(/[.,;:!?]/g, "");

    // reverse the sentence and join it together
    const reversedSentence = sentenceArray.reverse().join(" ");
    
    // uppercase the first letter of the sentence and add punctuation again
    return reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1) + punctuationArray;    
}