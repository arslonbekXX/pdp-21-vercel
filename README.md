## 🎯 VAZIFA: "Universitet boshqaruv tizimi" yaratish

---

## 📋 ENUM'LAR - Avval enum'larni tushunib olaylik

### 1️⃣ StudentStatus enum

enum StudentStatus {
ACTIVE = "faol",
SUSPENDED = "to'xtatilgan",
GRADUATED = "bitirgan",
ON_LEAVE = "ta'tilda"
}Misol: Agar talaba muvaffaqiyatli o'qiyotgan bo'lsa - ACTIVE, agar chetlashtirilgan bo'lsa - SUSPENDED

### 2️⃣ CourseLevel enum

enum CourseLevel {
BEGINNER = 1, // Boshlang'ich daraja
INTERMEDIATE = 2, // O'rta daraja
ADVANCED = 3, // Yuqori daraja
EXPERT = 4 // Mutaxassis darajasi
}Misol: "Matematika asoslari" kursi BEGINNER, "Ilg'or algoritmlar" kursi ADVANCED bo'ladi

### 3️⃣ Semester enum

enum Semester {
FALL = "kuz",
SPRING = "bahor",
SUMMER = "yoz",
WINTER = "qish"
}Misol: Kurs kuz semestrida o'qitilsa FALL, bahor semestrida bo'lsa SPRING

---

## 👨‍🎓 1-CLASS: Student (Talaba)

### 🔧 Field'lar (Xususiyatlar):

1. private studentId: number

- Nima: Har bir talabaning noyob raqami
- Nega private: Faqat class ichida o'zgartirilishi kerak, tashqaridan o'zgartirib bo'lmaydi
- Misol: 20230001, 20230002, 20230003...

2. protected fullName: string

- Nima: Talabaning to'liq ismi
- Nega protected: Meros oluvchi classlar (masalan GraduateStudent) ham ishlatishi mumkin
- Misol: "Ahmadov Javohir Karimovich"

3. public email: string

- Nima: Talabaning email manzili
- Nega public: Barcha joydan kirishga ruxsat berilgan
- Misol: "javohir.ahmadov@student.uz"

4. private status: StudentStatus

- Nima: Talabaning joriy holati (enum orqali)
- Nega private: Faqat class methodlari orqali o'zgartirilishi kerak
- Misol: StudentStatus.ACTIVE yoki StudentStatus.SUSPENDED

### 🛠️ Method'lar:

1. public getStudentInfo(): string

- Vazifasi: Talaba haqida ma'lumot beradi
- Kim foydalanadi: Barcha tashqi kodlar
- Nima qaytaradi: "ID: 20230001, Ism: Ahmadov Javohir, Email: javohir@student.uz, Holat: faol"
- Ketma-ketlik: ID → Ism → Email → Status ni birlashtiradi

2. public updateStatus(newStatus: StudentStatus): void

- Vazifasi: Talaba holatini yangilaydi
- Parametr: StudentStatus enum qiymati
- Misol ishlatish: updateStatus(StudentStatus.GRADUATED)
- Ketma-ketlik: Yangi statusni qabul qiladi → Tekshiradi → O'zgartiradi

3. protected isEligibleForEnrollment(): boolean

- Vazifasi: Talaba kursga yozila oladimi tekshiradi
- Kim foydalanadi: Meros oluvchi classlar
- Nima qaytaradi: true (agar ACTIVE) yoki false
- Ketma-ketlik: Status tekshiradi → ACTIVE bo'lsa true → Boshqa holda false

4. private validateEmail(email: string): boolean

- Vazifasi: Email to'g'riligini tekshiradi
- Kim foydalanadi: Faqat shu class
- Tekshiradi: @ belgisi bormi, domen to'g'rimi
- Ketma-ketlik: @ ni qidiradi → Domen tekshiradi → Natija qaytaradi

---

## 📚 2-CLASS: Course (Kurs)

### 🔧 Field'lar:

1. private courseId: string

- Nima: Kursning noyob identifikatori
- Nega private: Faqat class ichida boshqariladi
- Misol: "MATH101", "CS201", "PHYS301"

2. public courseName: string

- Nima: Kurs nomi
- Nega public: Hamma joydan o'qilishi mumkin
- Misol: "Oliy matematika", "Dasturlash asoslari", "Fizika"

3. protected level: CourseLevel

- Nima: Kurs qiyinlik darajasi
- Nega protected: Meros oluvchi classlar ham kerak
- Misol: CourseLevel.BEGINNER, CourseLevel.ADVANCED

4. private semester: Semester

- Nima: Qaysi semestrda o'qitiladi
- Nega private: Faqat class tomonidan boshqariladi
- Misol: Semester.FALL, Semester.SPRING

### 🛠️ Method'lar:

1. public getCourseDetails(): object

- Vazifasi: Kurs haqida batafsil ma'lumot beradi
- Kim foydalanadi: Tashqi kodlar
- Qaytaradi: {name: "Matematika", level: 1, semester: "kuz"}
- Ketma-ketlik: Barcha field'larni yig'adi → Object yaratadi → Qaytaradi

2. public changeSemester(newSemester: Semester): void

- Vazifasi: Kurs semestrini o'zgartiradi
- Parametr: Semester enum qiymati
- Misol: changeSemester(Semester.SUMMER)
- Ketma-ketlik: Yangi semestr qabul qiladi → Tekshiradi → O'zgartiradi

3. protected upgradeCourseLevel(): void

- Vazifasi: Kurs darajasini oshiradi
- Kim foydalanadi: Meros oluvchi classlar
- Misol: BEGINNER → INTERMEDIATE ga o'tkazadi
- Ketma-ketlik: Joriy darajani tekshiradi → +1 qiladi → Maksimumdan oshmaganini tekshiradi

4. private isAdvancedCourse(): boolean

- Vazifasi: Kurs murakkab darajadami tekshiradi
- Faqat ichki ishlatish: Boshqa methodlar uchun
- Qaytaradi: true (agar ADVANCED/EXPERT) yoki false
- Ketma-ketlik: Level qiymatini tekshiradi → 3 yoki 4 bo'lsa true

---

## 🏛️ 3-CLASS: University (Universitet)

### 🔧 Field'lar:

1. private universityName: string

- Nima: Universitet nomi
- Nega private: Rasmiy o'zgartirish kerak
- Misol: "Toshkent Davlat Universiteti", "TATU"

2. public address: string

- Nima: Universitet manzili
- Nega public: Ommaga ma'lum
- Misol: "Toshkent sh., Universitet ko'chasi 4-uy"

3. protected establishedYear: number

- Nima: Tashkil etilgan yili
- Nega protected: Kengaytirilgan versiyalar uchun
- Misol: 1920, 1955, 2000

4. private currentSemester: Semester

- Nima: Joriy o'quv semestri
- Nega private: Faqat universitet tomonidan o'zgartiriladi
- Misol: Semester.FALL (agar kuz semestri bo'lsa)

### 🛠️ Method'lar:

1. public getUniversityInfo(): string

- Vazifasi: Universitet haqida umumiy ma'lumot
- Barchaga ochiq: Ha
- Qaytaradi: "TATU, manzil: Toshkent, joriy semestr: kuz"
- Ketma-ketlik: Nom → Manzil → Joriy semestr → Birlashtiradi

2. public changeSemester(newSemester: Semester): void

- Vazifasi: Yangi semestr e'lon qiladi
- Parametr: Semester enum
- Misol: changeSemester(Semester.SPRING)
- Ketma-ketlik: Yangi semestrni qabul → Tasdiqlaydigan tekshirish → O'zgartiradi → Log yozadi

3. protected isAcademicSemester(): boolean

- Vazifasi: Asosiy o'quv semestrimi tekshiradi
- Meros oluvchilar uchun: Ha
- Qaytaradi: true (FALL/SPRING) yoki false (SUMMER/WINTER)
- Ketma-ketlik: Joriy semestrni tekshiradi → FALL yoki SPRING bo'lsa true

4. private generateSemesterReport(): string

- Vazifasi: Semestr hisobotini yaratadi
- Faqat ichki: Boshqaruv uchun
- Yaratadi: "Kuz semestri: 1250 talaba, 45 kurs"
- Ketma-ketlik: Ma'lumotlarni yig'adi → Formatga soladi → Hisobot tayyorlaydi

---

## 🔑 ACCESS MODIFIER'LAR (Ruxsat darajalari)

### 🔒 PRIVATE

- Kimga ruxsat: Faqat o'sha class ichida
- Misol: private studentId - faqat Student class ichida ishlatiladi
- Nega ishlatiladi: Ma'lumotni himoya qilish uchun

### 🔓 PROTECTED

- Kimga ruxsat: O'sha class + meros oluvchi classlar
- Misol: protected fullName - Student va GraduateStudent classlarda
- Nega ishlatiladi: Meros uchun ochiq, boshqalarga yopiq

### 🌐 PUBLIC

- Kimga ruxsat: Hamma joydan
- Misol: public email - istalgan joydan foydalanish mumkin
- Nega ishlatiladi: Umumiy foydalanish uchun

---
