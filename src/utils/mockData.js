import { db } from "@/firebase/config";

// 교육과정 목데이터
export const mockCourses = [
  {
    id: '1',
    title: '공조냉동기계 기능사 과정',
    description: '공조냉동기계 분야의 기초적인 지식과 기술을 습득하여 관련 산업 분야에서 실무를 수행할 수 있는 능력을 기르는 과정입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop',
    duration: '6개월',
    category: '공조냉동기계',
    level: '초급',
    createdAt: '2023-10-05T00:00:00Z',
    instructor: '김철수',
    maxStudents: 20,
    enrolledStudents: 15,
    featured: true
  }
];

// 교육과정 관련 함수
export const getCourses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        courses: mockCourses
      });
    }, 500);
  });
};

export const getCourseById = async (courseId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const course = mockCourses.find(c => c.id === courseId);
      if (course) {
        resolve({
          success: true,
          course
        });
      } else {
        resolve({
          success: false,
          error: '교육과정을 찾을 수 없습니다.'
        });
      }
    }, 500);
  });
};

export const addCourse = async (courseData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 추가하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        courseId: Math.random().toString(36).substr(2, 9),
        message: '교육과정이 성공적으로 등록되었습니다.'
      });
    }, 500);
  });
};

export const updateCourse = async (courseId, courseData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 수정하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        message: '교육과정이 성공적으로 수정되었습니다.'
      });
    }, 500);
  });
};


// 공지사항 목데이터
export const mockNotices = [
  {
    id: '1',
    title: '2023학년도 수시 입학 지원 안내',
    content: '2023학년도 수시 입학 지원에 대한 안내입니다. 자세한 내용은 첨부파일을 참고해주세요.',
    createdAt: '2023-09-01T00:00:00Z',
    updatedAt: '2023-09-01T00:00:00Z',
    author: '관리자',
    important: true
  },
  {
    id: '2',
    title: '2학기 비대면 수업 전환 안내',
    content: '코로나19 확산 방지를 위해 2학기 수업이 비대면으로 전환됩니다. 자세한 내용은 본문을 참고해주세요.',
    createdAt: '2023-08-20T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z',
    author: '관리자',
    important: true
  },
  {
    id: '3',
    title: '2023학년도 장학금 신청 안내',
    content: '2023학년도 장학금 신청에 대한 안내입니다. 신청 기간은 2023년 9월 1일부터 9월 15일까지입니다.',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    author: '관리자',
    important: false
  },
  {
    id: '4',
    title: '취업 특강 안내',
    content: '취업 특강이 9월 10일에 실시됩니다. 관심있는 학생들은 참석 바랍니다.',
    createdAt: '2023-08-10T00:00:00Z',
    updatedAt: '2023-08-10T00:00:00Z',
    author: '관리자',
    important: false
  },
  {
    id: '5',
    title: '도서관 이용 시간 변경 안내',
    content: '9월부터 도서관 이용 시간이 변경됩니다. 변경된 시간은 평일 오전 9시부터 오후 8시까지입니다.',
    createdAt: '2023-08-05T00:00:00Z',
    updatedAt: '2023-08-05T00:00:00Z',
    author: '관리자',
    important: false
  }
];

// 문의사항 목데이터
export const mockContacts = [
  {
    id: '1',
    name: '김철수',
    email: 'chulsoo@example.com',
    phone: '010-1234-5678',
    subject: '입학 절차 문의',
    message: '안녕하세요, 2024학년도 입학 절차에 대해 문의 드립니다. 필요한 서류와 접수 기간이 궁금합니다.',
    status: 'new',
    createdAt: '2023-09-10T00:00:00Z'
  },
  {
    id: '2',
    name: '이영희',
    email: 'younghee@example.com',
    phone: '010-2345-6789',
    subject: '장학금 신청 문의',
    message: '장학금 신청 과정에서 어려움을 겪고 있습니다. 자세한 절차를 알려주시면 감사하겠습니다.',
    status: 'in-progress',
    createdAt: '2023-09-05T00:00:00Z'
  },
  {
    id: '3',
    name: '박민수',
    email: 'minsu@example.com',
    phone: '010-3456-7890',
    subject: '교육과정 관련 질문',
    message: '공조냉동기계 전공 교육과정에 대해 알고 싶습니다. 주요 과목과 실습 내용이 궁금합니다.',
    status: 'completed',
    createdAt: '2023-08-28T00:00:00Z'
  },
  {
    id: '4',
    name: '정수진',
    email: 'soojin@example.com',
    phone: '010-4567-8901',
    subject: '전화번호 변경 요청',
    message: '제 학생 정보의 전화번호를 010-4567-8901로 변경해주시기 바랍니다.',
    status: 'new',
    createdAt: '2023-08-20T00:00:00Z'
  },
  {
    id: '5',
    name: '최도현',
    email: 'dohyun@example.com',
    phone: '010-5678-9012',
    subject: '기술교육원 견학 문의',
    message: '귀 교육원 견학이 가능한지 문의 드립니다. 가능하다면 견학 가능한 날짜와 시간을 알려주시기 바랍니다.',
    status: 'in-progress',
    createdAt: '2023-08-15T00:00:00Z'
  }
];

// 모의 데이터 처리 함수들
export const getNotices = async () => {
  // 비동기 함수처럼 동작하도록 Promise 반환
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        notices: mockNotices
      });
    }, 500); // 실제 API 호출처럼 약간의 지연 시간 추가
  });
};

export const getNoticeById = async (noticeId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const notice = mockNotices.find(n => n.id === noticeId);
      if (notice) {
        resolve({
          success: true,
          notice
        });
      } else {
        resolve({
          success: false,
          error: '공지사항을 찾을 수 없습니다.'
        });
      }
    }, 500);
  });
};

export const addNotice = async (noticeData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 추가하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        noticeId: Math.random().toString(36).substr(2, 9),
        message: '공지사항이 성공적으로 등록되었습니다.'
      });
    }, 500);
  });
};

export const updateNotice = async (noticeId, noticeData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 수정하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        message: '공지사항이 성공적으로 수정되었습니다.'
      });
    }, 500);
  });
};

export const deleteNotice = async (noticeId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 삭제하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        message: '공지사항이 성공적으로 삭제되었습니다.'
      });
    }, 500);
  });
};

export const getContacts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        contacts: mockContacts
      });
    }, 500);
  });
};

export const getContactById = async (contactId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const contact = mockContacts.find(c => c.id === contactId);
      if (contact) {
        resolve({
          success: true,
          contact
        });
      } else {
        resolve({
          success: false,
          error: '문의사항을 찾을 수 없습니다.'
        });
      }
    }, 500);
  });
};

export const addContact = async (contactData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 추가하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        contactId: Math.random().toString(36).substr(2, 9),
        message: '문의가 성공적으로 접수되었습니다.'
      });
    }, 500);
  });
};

export const updateContactStatus = async (contactId, status) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 수정하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        message: '문의상태가 성공적으로 수정되었습니다.'
      });
    }, 500);
  });
};

export const deleteContact = async (contactId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 실제로 데이터를 삭제하지는 않고, 성공 응답만 반환
      resolve({
        success: true,
        message: '문의가 성공적으로 삭제되었습니다.'
      });
    }, 500);
  });
};