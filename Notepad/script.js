const textArea = document.getElementById('notepad');
        const saveBtn = document.getElementById('save');
        const clearBtn = document.getElementById('clear');

        // Display saved text from Local Storage when the page loads
        window.addEventListener('load', () => {
            const savedText = localStorage.getItem('savedText');
            if (savedText) {
                textArea.value = savedText;
            }
        });

        // Save the text in Local Storage when the Save button is clicked
        saveBtn.addEventListener('click', () => {
            const textToSave = textArea.value;
            localStorage.setItem('savedText', textToSave);
        });

        // Clear the text in the notepad and localStorage when the Clear button is clicked
        clearBtn.addEventListener('click', () => {
            textArea.value = '';
            localStorage.removeItem('savedText');
        });