export function reverseSentence(sentence) {
    // Find sentence markers at the end of the sentence
    let sentence_markers = sentence.match(/[\.\?\!]$/);

    // Split the sentence into words using regular expression
    // This also handles currency and number support
    let words = Array.from(sentence.matchAll(/([$£][0-9]+.?[0-9]*)|(\w+['-,]?[a-z]{0,2})/gi));

    // Reverse the order of the words
    words.reverse();

    // Create an array to store the final words
    let final_words = [];

    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        let [word] = words[i];

        // If the word is not in uppercase and it's the last word, convert the first character to lowercase
        if (word.toUpperCase() !== word && i === words.length - 1) {
            word = word.charAt(0).toLowerCase() + word.slice(1);
        }

        // If the word ends with a comma, remove the comma and add it to the previous word
        if (word.match(/,$/)) {
            final_words.push(word.slice(0, -1));
            final_words[i - 1] += ",";
            continue;
        }

        // Add the word to the final words array
        final_words.push(word);
    }

    // If there are final words, capitalize the first word
    if (final_words.length) {
        final_words[0] = final_words[0].charAt(0).toUpperCase() + final_words[0].slice(1);
    }

    // Join the final words with a space and add the sentence markers at the end
    return final_words.join(" ") + (sentence_markers ?? '');
}
