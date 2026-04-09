function checkVowel() {
    let ch = document.getElementById("charInput").value;


    if (ch.length !== 1) {
        document.getElementById("output").innerText = "Enter a valid/single character";
        return;
    }

    ch = ch.toLowerCase();

    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        document.getElementById("output").innerText = "Vowel";
    } else {
        document.getElementById("output").innerText = "Consonant";
    }
}