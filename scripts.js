const onlineUsers = ['짱구', '유리', '철수', '맹구', '훈발놈'];

document.addEventListener('DOMContentLoaded', () => {
  // 1. 온라인 유저 목록 생성
  const onlineUsersList = document.getElementById('online-users');
  onlineUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `● ${user}`;
    listItem.style.padding = '5px 0';
    onlineUsersList.appendChild(listItem);
  });

  // 2. [변경] 마우스 호버 사이드바 로직
  const sidebar = document.getElementById('sidebar');
  const trigger = document.getElementById('sidebar-trigger');

  // 감지 영역이나 사이드바 자체에 마우스가 올라가면 표시
  const showSidebar = () => sidebar.classList.add('active');
  const hideSidebar = () => sidebar.classList.remove('active');

  trigger.addEventListener('mouseenter', showSidebar);
  sidebar.addEventListener('mouseenter', showSidebar);

  // 사이드바에서 마우스가 벗어나면 숨김
  sidebar.addEventListener('mouseleave', hideSidebar);
  trigger.addEventListener('mouseleave', (e) => {
    // 사이드바 방향(오른쪽)으로 이동한 게 아니라면 숨김
    if (e.relatedTarget !== sidebar) hideSidebar();
  });

// 3. 이미지 슬라이드 로직 수정
  const slides = document.querySelectorAll('.slideshow img');
  let currentSlideIndex = 0;

  function showNextSlide() {
    // 모든 슬라이드를 숨김
    slides.forEach(slide => {
      slide.classList.remove('active');
      slide.style.opacity = '0';
    });
    
    // 현재 슬라이드만 표시
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
        slides[currentSlideIndex].style.opacity = '1';
    }
    
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  }

  // 초기 실행 및 인터벌 설정
  showNextSlide(); 
  setInterval(showNextSlide, 3000);

  // 4. 게시글 추가 로직 (기존 유지)
  const submitBtn = document.getElementById('submit-btn');
  const postContainer = document.getElementById('post-container');

  submitBtn.addEventListener('click', () => {
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    if (postTitle.trim() === '' || postContent.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    const postElement = createPostElement(postTitle, postContent);
    postContainer.prepend(postElement); // 최신글이 위로 오게 변경

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
  });

  function createPostElement(title, content) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.style.borderBottom = '1px solid #eee';
    postElement.style.padding = '10px 0';
    postElement.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    return postElement;
  }
});

function showAlert(schedule) {
  alert(schedule);
}