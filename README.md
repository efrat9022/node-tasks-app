# Node Tasks App

מערכת לניהול משימות פשוטה באמצעות Node.js ו־Express.

##  תכולת הפרויקט
- ניהול משימות (קריאה, הוספה, סימון כהושלמה, מחיקה)
- שימוש ב־EJS לתצוגה דינמית
- שמירת משימות במסד נתונים MySQL

##  טכנולוגיות בשימוש
- Node.js  
- Express.js  
- EJS  
- MySQL  
- Body-parser / Method-override  
- Dotenv  
- Nodemon  

##  מבנה תיקיות
Controllers/  
Models/  
Routers/  
Service/  
Views/  
db/  
.env  
.gitignore  
app.js  

##  הוראות התקנה והרצה

1. שיכפול (Clone) של הריפוזיטורי:
   git clone https://github.com/efrat9022/node-tasks-app.git  
   cd node-tasks-app

2. התקנת תלויות:
   npm install

3. יצירת קובץ .env עם משתני הסביבה:
   DB_HOST=localhost  
   DB_USER=root  
   DB_PASSWORD=yourpassword  
   DB_NAME=tasksdb

4. הרצת הפרויקט:
   npm start

## שימוש
/ – דף הבית: מציג את כל המשימות  
/tasks/add – טופס הוספת משימה  
PUT /tasks/:id – סימון משימה כהושלמה  
DELETE /tasks/:id – מחיקת משימה
