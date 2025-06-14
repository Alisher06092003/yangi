

loadStudents();

// Guruh yaratish funksiyasi
// Guruh yaratish funksiyasi
async function handleGroupCreation() {
    const groupName = groupNameInput.value.trim();

    if (!validateInput(groupName)) return; // Agar guruh nomi noto‘g‘ri bo‘lsa, funksiyani to‘xtat

    try {
        const response = await createGroup(groupName);
        await handleResponse(response);
        groupNameInput.value = ""; // Inputni tozalash
        loadGroups(); // Ro'yxatni yangilash
    } catch (error) {
        console.error("❌ Xatolik:", error);
        alert("❌ Guruh yaratishda muammo yuz berdi!");
    }
}

// Serverdan javobni qayta ishlash
async function handleResponse(response) {
    const rawData = await response.text();
    let data;
    try {
        data = JSON.parse(rawData);
    } catch (error) {
        console.error("❌ Server noto‘g‘ri JSON qaytardi!");
        alert("❌ Server noto‘g‘ri javob qaytardi!");
        return;
    }

    alert(`✅ Guruh yaratildi: ${data.message}`);
}

// Guruh yaratish uchun kerakli 
function validateInput(groupName) {
    if (!groupName) {
        alert("❌ Guruh nomini kiritishingiz kerak!");
        return false; // Noto‘g‘ri bo‘lsa, false qaytaradi
    }
    return true; // To‘g‘ri bo‘lsa, true qaytaradi
}

