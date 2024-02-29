// Sample data (you can replace this with your actual data)
const data = [
 // add data here
["SBT1Aanshi","12720433","./SBT1/SBT AANSHI 05/1.bmp","./SBT1/SBT AANSHI 05/2.bmp","./SBT1/SBT AANSHI 05/3.bmp","./SBT1/SBT AANSHI 05/4.bmp","./SBT1/SBT AANSHI 05/5.bmp"],
["SBT1Anchal Prajapati","05330527","./SBT1/SBT ANCHAL PRAJAPATI 73/1.bmp","./SBT1/SBT ANCHAL PRAJAPATI 73/2.bmp","./SBT1/SBT ANCHAL PRAJAPATI 73/3.bmp","./SBT1/SBT ANCHAL PRAJAPATI 73/4.bmp","./SBT1/SBT ANCHAL PRAJAPATI 73/5.bmp"],
["SBT1Aneesha","30125454","./SBT1/SBT ANEESHA 42/1.bmp","./SBT1/SBT ANEESHA 42/2.bmp","./SBT1/SBT ANEESHA 42/3.bmp","./SBT1/SBT ANEESHA 42/4.bmp","./SBT1/SBT ANEESHA 42/5.bmp"],
["SBT1Antima Sharma","15665033","./SBT1/SBT ANTIMA/1.bmp","./SBT1/SBT ANTIMA/2.bmp","./SBT1/SBT ANTIMA/3.bmp","./SBT1/SBT ANTIMA/4.bmp","./SBT1/SBT ANTIMA/5.bmp"],
["SBT2Arti","****","./SBT2/SBT ARTI 106/1.bmp","./SBT2/SBT ARTI 106/2.bmp","./SBT2/SBT ARTI 106/3.bmp","./SBT2/SBT ARTI 106/4.bmp","./SBT2/SBT ARTI 106/5.bmp"],
["SBT1Astha","24165796","./SBT1/SBT ASTHA 53/1.bmp","./SBT1/SBT ASTHA 53/2.bmp","./SBT1/SBT ASTHA 53/3.bmp","./SBT1/SBT ASTHA 53/4.bmp","./SBT1/SBT ASTHA 53/5.bmp"],
["SBT1Dipika","60421635","./SBT1/SBT DIPIKA 10/1.bmp","./SBT1/SBT DIPIKA 10/2.bmp","./SBT1/SBT DIPIKA 10/3.bmp","./SBT1/SBT DIPIKA 10/4.bmp","./SBT1/SBT DIPIKA 10/5.bmp"],
["SBT1Jyoti","75182090","./SBT1/SBT JYOTI 66/1.bmp","./SBT1/SBT JYOTI 66/2.bmp","./SBT1/SBT JYOTI 66/3.bmp","./SBT1/SBT JYOTI 66/4.bmp","./SBT1/SBT JYOTI 66/5.bmp"],
["SBT1Jyoti Shukla","AADHAR ISSUE","./SBT1/SBT JYOTI SHUKLA 27/1.bmp","./SBT1/SBT JYOTI SHUKLA 27/2.bmp","./SBT1/SBT JYOTI SHUKLA 27/3.bmp","./SBT1/SBT JYOTI SHUKLA 27/4.bmp","./SBT1/SBT JYOTI SHUKLA 27/5.bmp"],
["SBT2Kajal","****","./SBT2/SBT KAJAL 70/1.bmp","./SBT2/SBT KAJAL 70/2.bmp","./SBT2/SBT KAJAL 70/3.bmp","./SBT2/SBT KAJAL 70/4.bmp","./SBT2/SBT KAJAL 70/5.bmp"],
["SBT1Kesh Kumari","59951236","./SBT1/SBT Kesh kumari 08/1.bmp","./SBT1/SBT Kesh kumari 08/2.bmp","./SBT1/SBT Kesh kumari 08/3.bmp","./SBT1/SBT Kesh kumari 08/4.bmp","./SBT1/SBT Kesh kumari 08/5.bmp"],
["SBT1Khushboo Shahu","70926876","./SBT1/SBT KHUSHBOO SHAHU/1.bmp","./SBT1/SBT KHUSHBOO SHAHU/2.bmp","./SBT1/SBT KHUSHBOO SHAHU/3.bmp","./SBT1/SBT KHUSHBOO SHAHU/4.bmp","./SBT1/SBT KHUSHBOO SHAHU/5.bmp"],
["SBT1Mahak Maurya","70955467","./SBT1/SBT MAHAK MAURYA 62/1.bmp","./SBT1/SBT MAHAK MAURYA 62/2.bmp","./SBT1/SBT MAHAK MAURYA 62/3.bmp","./SBT1/SBT MAHAK MAURYA 62/4.bmp","./SBT1/SBT MAHAK MAURYA 62/5.bmp"],
["SBT1Manisha Yadav","52748085","./SBT1/SBT MANISHA YADAV 56/1.bmp","./SBT1/SBT MANISHA YADAV 56/2.bmp","./SBT1/SBT MANISHA YADAV 56/3.bmp","./SBT1/SBT MANISHA YADAV 56/4.bmp","./SBT1/SBT MANISHA YADAV 56/5.bmp"],
["SBT2Mithilesh","****","./SBT2/SBT MITHILESH 24/1.bmp","./SBT2/SBT MITHILESH 24/1.bmp","./SBT2/SBT MITHILESH 24/3.bmp","./SBT2/SBT MITHILESH 24/4.bmp","./SBT2/SBT MITHILESH 24/5.bmp"],
["SBT1Mohini Maurya","72637194","./SBT1/SBT MOHINI MAURYA 34/1.bmp","./SBT1/SBT MOHINI MAURYA 34/2.bmp","./SBT1/SBT MOHINI MAURYA 34/3.bmp","./SBT1/SBT MOHINI MAURYA 34/4.bmp","./SBT1/SBT MOHINI MAURYA 34/5.bmp"],
["SBT1Moni","54543112","./SBT1/SBT MONI 76/1.bmp","./SBT1/SBT MONI 76/2.bmp","./SBT1/SBT MONI 76/3.bmp","./SBT1/SBT MONI 76/4.bmp","./SBT1/SBT MONI 76/5.bmp"],
["SBT1Nandani Singh","99294681","./SBT1/SBT NANDANI SINGH 75/1.bmp","./SBT1/SBT NANDANI SINGH 75/2.bmp","./SBT1/SBT NANDANI SINGH 75/3.bmp","./SBT1/SBT NANDANI SINGH 75/4.bmp","./SBT1/SBT NANDANI SINGH 75/5.bmp"],
["SBT2Neha Singh","****","./SBT2/SBT Neha singh 123/1.bmp","./SBT2/SBT Neha singh 123/2.bmp","./SBT2/SBT Neha singh 123/3.bmp","./SBT2/SBT Neha singh 123/4.bmp","./SBT2/SBT Neha singh 123/5.bmp"],
["SBT1Pooja Maurya","36485466","./SBT1/SBT POOJA MAURYA 102/1.bmp","./SBT1/SBT POOJA MAURYA 102/2.bmp","./SBT1/SBT POOJA MAURYA 102/3.bmp","./SBT1/SBT POOJA MAURYA 102/4.bmp","./SBT1/SBT POOJA MAURYA 102/5.bmp"],
["SBT1Pooja Yadav","25157279","./SBT1/SBT POOJA YADAV/1.bmp","./SBT1/SBT POOJA YADAV/2.bmp","./SBT1/SBT POOJA YADAV/3.bmp","./SBT1/SBT POOJA YADAV/4.bmp","./SBT1/SBT POOJA YADAV/5.bmp"],
["SBT2Poornima Yadav","****","./SBT2/SBT POORNIMA YADAV 99/1.bmp","./SBT2/SBT POORNIMA YADAV 99/2.bmp","./SBT2/SBT POORNIMA YADAV 99/3.bmp","./SBT2/SBT POORNIMA YADAV 99/4.bmp","./SBT2/SBT POORNIMA YADAV 99/5.bmp"],
["SBT2Preeti","****","./SBT2/SBT Preeti 121/1.bmp","./SBT2/SBT Preeti 121/2.bmp","./SBT2/SBT Preeti 121/3.bmp","./SBT2/SBT Preeti 121/4.bmp","./SBT2/SBT Preeti 121/5.bmp"],
["SBT1Priya","66024356","./SBT1/SBT PRIYA 30/1.bmp","./SBT1/SBT PRIYA 30/2.bmp","./SBT1/SBT PRIYA 30/3.bmp","./SBT1/SBT PRIYA 30/4.bmp","./SBT1/SBT PRIYA 30/5.bmp"],
["SBT1Priyanka Chauhan","03027453","./SBT1/SBT PRIYANKA CHAUHAN 110/1.bmp","./SBT1/SBT PRIYANKA CHAUHAN 110/2.bmp","./SBT1/SBT PRIYANKA CHAUHAN 110/3.bmp","./SBT1/SBT PRIYANKA CHAUHAN 110/4.bmp","./SBT1/SBT PRIYANKA CHAUHAN 110/5.bmp"],
["SBT2Rakhi Singh","****","./SBT2/SBT RAKHI SINGH 062/1.bmp","./SBT2/SBT RAKHI SINGH 062/2.bmp","./SBT2/SBT RAKHI SINGH 062/3.bmp","./SBT2/SBT RAKHI SINGH 062/4.bmp","./SBT2/SBT RAKHI SINGH 062/5.bmp"],
["SBT1Ramavati","02412889","./SBT1/SBT RAMAVATI 17/1.bmp","./SBT1/SBT RAMAVATI 17/2.bmp","./SBT1/SBT RAMAVATI 17/3.bmp","./SBT1/SBT RAMAVATI 17/4.bmp","./SBT1/SBT RAMAVATI 17/5.bmp"],
["SBT2Sadhana Maurya","****","./SBT2/SBT SADHANA MAURYA 68/1.bmp","./SBT2/SBT SADHANA MAURYA 68/2.bmp","./SBT2/SBT SADHANA MAURYA 68/3.bmp","./SBT2/SBT SADHANA MAURYA 68/4.bmp","./SBT2/SBT SADHANA MAURYA 68/5.bmp"],
["SBT2Saloni Yadav","****","./SBT2/SBT SALONI YADAV 107/1.bmp","./SBT2/SBT SALONI YADAV 107/2.bmp","./SBT2/SBT SALONI YADAV 107/3.bmp","./SBT2/SBT SALONI YADAV 107/4.bmp","./SBT2/SBT SALONI YADAV 107/5.bmp"],
["SBT1Saniya","04148364","./SBT1/SBT SANIYA/1.bmp","./SBT1/SBT SANIYA/2.bmp","./SBT1/SBT SANIYA/3.bmp","./SBT1/SBT SANIYA/4.bmp","./SBT1/SBT SANIYA/5.bmp"],
["Sarla Devi","****","./SBT2/SBT SARLA DEVI 062/1.bmp","./SBT2/SBT SARLA DEVI 062/2.bmp","./SBT2/SBT SARLA DEVI 062/3.bmp","./SBT2/SBT SARLA DEVI 062/4.bmp","./SBT2/SBT SARLA DEVI 062/5.bmp"],
["SBT2Shahin Bano","****","./SBT2/SBT SHAHIN BANO 101/1.bmp","./SBT2/SBT SHAHIN BANO 101/2.bmp","./SBT2/SBT SHAHIN BANO 101/3.bmp","./SBT2/SBT SHAHIN BANO 101/4.bmp","./SBT2/SBT SHAHIN BANO 101/5.bmp"],
["SBT2Shanti","****","./SBT2/SBT SHANTI 71/1.bmp","./SBT2/SBT SHANTI 71/2.bmp","./SBT2/SBT SHANTI 71/3.bmp","./SBT2/SBT SHANTI 71/4.bmp","./SBT2/SBT SHANTI 71/5.bmp"],
["SBT1Shivani","93571070","./SBT1/SBT SHIVANI 58/1.bmp","./SBT1/SBT SHIVANI 58/2.bmp","./SBT1/SBT SHIVANI 58/3.bmp","./SBT1/SBT SHIVANI 58/4.bmp","./SBT1/SBT SHIVANI 58/5.bmp"],
["SBT1Shivani Vishwakarma","83757088","./SBT1/SBT SHIVANI VISHWAKARMA 77/1.bmp","./SBT1/SBT SHIVANI VISHWAKARMA 77/2.bmp","./SBT1/SBT SHIVANI VISHWAKARMA 77/3.bmp","./SBT1/SBT SHIVANI VISHWAKARMA 77/4.bmp","./SBT1/SBT SHIVANI VISHWAKARMA 77/5.bmp"],
["SBT2Shraddha Pandey","****","./SBT2/SBT Shraddha Pandey 53/1.bmp","./SBT2/SBT Shraddha Pandey 53/2.bmp","./SBT2/SBT Shraddha Pandey 53/3.bmp","./SBT2/SBT Shraddha Pandey 53/4.bmp","./SBT2/SBT Shraddha Pandey 53/5.bmp"],
["SBT2Sonal","****","./SBT2/SBT SONAL 060/1.bmp","./SBT2/SBT SONAL 060/2.bmp","./SBT2/SBT SONAL 060/3.bmp","./SBT2/SBT SONAL 060/4.bmp","./SBT2/SBT SONAL 060/5.bmp"],
["SBT1Sonam Kashyap","75792780","./SBT1/SBT SONAM KASHYAP 104/1.bmp","./SBT1/SBT SONAM KASHYAP 104/2.bmp","./SBT1/SBT SONAM KASHYAP 104/3.bmp","./SBT1/SBT SONAM KASHYAP 104/4.bmp","./SBT1/SBT SONAM KASHYAP 104/5.bmp"],
["SBT1Soni","60750447","./SBT1/SBT SONI 98/1.bmp","./SBT1/SBT SONI 98/2.bmp","./SBT1/SBT SONI 98/3.bmp","./SBT1/SBT SONI 98/4.bmp","./SBT1/SBT SONI 98/5.bmp"],
["SBT1Suman Sharma","24826705","./SBT1/SBT SUMAN SHARMA 44/1.bmp","./SBT1/SBT SUMAN SHARMA 44/2.bmp","./SBT1/SBT SUMAN SHARMA 44/3.bmp","./SBT1/SBT SUMAN SHARMA 44/4.bmp","./SBT1/SBT SUMAN SHARMA 44/5.bmp"],
["SBT2Sushma","****","./SBT2/SBT Sushma 061/1.bmp","./SBT2/SBT Sushma 061/2.bmp","./SBT2/SBT Sushma 061/3.bmp","./SBT2/SBT Sushma 061/4.bmp","./SBT2/SBT Sushma 061/5.bmp"],
["SBT2Swati","****","./SBT2/SBT SWATI 063/1.bmp","./SBT2/SBT SWATI 063/2.bmp","./SBT2/SBT SWATI 063/3.bmp","./SBT2/SBT SWATI 063/4.bmp","./SBT2/SBT SWATI 063/5.bmp"],
["SBT1Vibha Shukla","75292568","./SBT1/SBT VIBHA SHUKLA 31/1.bmp","./SBT1/SBT VIBHA SHUKLA 31/2.bmp","./SBT1/SBT VIBHA SHUKLA 31/3.bmp","./SBT1/SBT VIBHA SHUKLA 31/4.bmp","./SBT1/SBT VIBHA SHUKLA 31/5.bmp"],
["SBT1Vineeta","17862956","./SBT1/SBT vineeta 13/1.bmp","./SBT1/SBT vineeta 13/2.bmp","./SBT1/SBT vineeta 13/3.bmp","./SBT1/SBT vineeta 13/4.bmp","./SBT1/SBT vineeta 13/5.bmp"],


         // 1-30 are done....
// adding more rows..

];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 2 && index <= 6) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
