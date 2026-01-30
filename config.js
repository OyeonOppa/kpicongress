// ไฟล์ config.js - ควบคุมการแสดงผลข้อมูลแต่ละปี
const conferenceConfig = {
    // ปีปัจจุบันที่กำลังจัดงาน
    currentYear: 2568,
    
    // ข้อมูลแต่ละปี - ตั้งค่า visible: true เพื่อแสดง, false เพื่อซ่อน
    conferences: {
        2568: {
            visible: true, // เปิดให้เห็น
            status: 'upcoming', // upcoming, ongoing, completed
            theme: {
                th: 'ประชาธิปไตยกับการพัฒนาที่ยั่งยืน',
                en: 'Democracy and Sustainable Development'
            },
            date: {
                th: 'วันที่ 15-16 มีนาคม 2568',
                en: 'March 15-16, 2025'
            },
            location: {
                th: 'หอประชุมสถาบันพระปกเกล้า',
                en: 'King Prajadhipok\'s Institute Auditorium'
            },
            registrationOpen: true, // เปิด-ปิดลงทะเบียน
            registrationUrl: '#', // ลิงก์ลงทะเบียน
            hasDocuments: false, // มีเอกสารประกอบหรือยัง
            hasGallery: false, // มีภาพกิจกรรมหรือยัง
            hasVideos: false // มีวิดีโอหรือยัง
        },
        2567: {
            visible: true, // เปิดให้เห็น
            status: 'completed',
            theme: {
                th: 'การมีส่วนร่วมของประชาชนในการพัฒนาประชาธิปไตย',
                en: 'Citizen Participation in Democratic Development'
            },
            date: {
                th: 'วันที่ 20-21 มีนาคม 2567',
                en: 'March 20-21, 2024'
            },
            location: {
                th: 'หอประชุมสถาบันพระปกเกล้า',
                en: 'King Prajadhipok\'s Institute Auditorium'
            },
            registrationOpen: false,
            registrationUrl: '#',
            hasDocuments: true,
            hasGallery: true,
            hasVideos: true,
            documents: [
                { name: { th: 'บทความวิชาการ', en: 'Academic Papers' }, url: '#' },
                { name: { th: 'สรุปผลการประชุม', en: 'Conference Summary' }, url: '#' }
            ],
            galleryImages: 12, // จำนวนรูปในแกลเลอรี่
            videos: [
                { title: { th: 'วิดีโอเปิดงาน', en: 'Opening Ceremony' }, url: '#' }
            ]
        },
        2566: {
            visible: true, // เปิดให้เห็น
            status: 'completed',
            theme: {
                th: 'ธรรมาภิบาลและความโปร่งใสในภาครัฐ',
                en: 'Good Governance and Transparency in Public Sector'
            },
            date: {
                th: 'วันที่ 18-19 มีนาคม 2566',
                en: 'March 18-19, 2023'
            },
            location: {
                th: 'หอประชุมสถาบันพระปกเกล้า',
                en: 'King Prajadhipok\'s Institute Auditorium'
            },
            registrationOpen: false,
            registrationUrl: '#',
            hasDocuments: true,
            hasGallery: true,
            hasVideos: false,
            documents: [
                { name: { th: 'บทความวิชาการ', en: 'Academic Papers' }, url: '#' }
            ],
            galleryImages: 8
        },
        2565: {
            visible: false, // ซ่อนไว้ - ยังไม่มีข้อมูล
            status: 'completed',
            theme: {
                th: 'ประชาธิปไตยในยุคดิจิทัล',
                en: 'Democracy in Digital Age'
            },
            date: {
                th: 'วันที่ 15-16 มีนาคม 2565',
                en: 'March 15-16, 2022'
            },
            location: {
                th: 'หอประชุมสถาบันพระปกเกล้า',
                en: 'King Prajadhipok\'s Institute Auditorium'
            },
            registrationOpen: false,
            hasDocuments: false,
            hasGallery: false,
            hasVideos: false
        },
        2564: {
            visible: false, // ซ่อนไว้ - ยังไม่มีข้อมูล
            status: 'completed',
            theme: {
                th: 'การปฏิรูปการเมืองไทย',
                en: 'Thai Political Reform'
            },
            date: {
                th: 'วันที่ 20-21 มีนาคม 2564',
                en: 'March 20-21, 2021'
            },
            location: {
                th: 'หอประชุมสถาบันพระปกเกล้า',
                en: 'King Prajadhipok\'s Institute Auditorium'
            },
            registrationOpen: false,
            hasDocuments: false,
            hasGallery: false,
            hasVideos: false
        }
    },
    
    // ฟังก์ชันช่วยเหลือ
    getVisibleYears: function() {
        return Object.keys(this.conferences)
            .filter(year => this.conferences[year].visible)
            .sort((a, b) => b - a); // เรียงจากปีล่าสุด
    },
    
    getCurrentConference: function() {
        return this.conferences[this.currentYear];
    },
    
    getConference: function(year) {
        return this.conferences[year];
    },
    
    isPastConference: function(year) {
        return parseInt(year) < this.currentYear;
    }
};

// Export สำหรับใช้ในไฟล์อื่น
if (typeof module !== 'undefined' && module.exports) {
    module.exports = conferenceConfig;
}