document.getElementById('calculate').addEventListener('click', function() {
    const height = document.getElementById('height').value; // รับค่าความสูง
    const weight = document.getElementById('weight').value; // รับค่าน้ำหนัก

    if (height && weight) { // ตรวจสอบว่ามีการกรอกข้อมูล
        const heightInMeters = height / 100; // แปลงความสูงเป็นเมตร
        const bmi = weight / (heightInMeters * heightInMeters); // คำนวณ BMI
        let status = ''; // สถานะน้ำหนัก

        // ตรวจสอบสถานะน้ำหนักตามค่า BMI
        if (bmi < 18.5) {
            status = 'คุณมีน้ำหนักน้อย';
        } else if (bmi < 24.9) {
            status = 'คุณมีน้ำหนักปกติ';
        } else if (bmi < 29.9) {
            status = 'คุณมีน้ำหนักเกิน';
        } else {
            status = 'คุณมีโรคอ้วน';
        }

        const idealWeight = 22.5 * (heightInMeters * heightInMeters); // คำนวณน้ำหนักที่เหมาะสม
        const weightToLose = weight - idealWeight; // คำนวณน้ำหนักที่ควรลด

        // แสดงผลลัพธ์
        document.getElementById('result').innerHTML = `
            <p>BMI ของคุณ: ${bmi.toFixed(2)}</p>
            <p>สถานะ: ${status}</p>
            <p>${weightToLose > 0 ? `คุณควรลดน้ำหนักประมาณ ${weightToLose.toFixed(2)} กิโลกรัม` : 'น้ำหนักของคุณอยู่ในเกณฑ์ที่ดีแล้ว'}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>กรุณากรอกข้อมูลให้ครบถ้วน</p>`; // แจ้งเตือนถ้ายังไม่กรอกข้อมูล
    }
});
