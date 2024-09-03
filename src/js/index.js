const audio = document.getElementById('background-music');
const button = document.getElementById('toggle-music');

// Đặt trạng thái âm thanh ban đầu là không phát
let isPlaying = false;

// Các phần tử slide và canvas
let firstSlideContainer = document.getElementsByClassName("slide--content")[0];
let secondSlideContainer = document.getElementsByClassName("slide--content--one")[0];
let secondCanvas = document.getElementsByClassName("second--canvas")[0];
let thirdCanvas = document.getElementsByClassName("third--canvas")[0];

// Ẩn các phần tử slide và canvas ban đầu
function hideSlides() {
    firstSlideContainer.setAttribute("style", "display:none");
    secondSlideContainer.setAttribute("style", "display:none");
    secondCanvas.setAttribute("style", "display:none");
    thirdCanvas.setAttribute("style", "display:none");
}
hideSlides(); // Gọi hàm này khi trang được tải

// Hàm để hiển thị các slide
function showSlides() {

    setTimeout(function() {
        firstSlideContainer.setAttribute("style", "display:none");
        secondSlideContainer.setAttribute("style", "display:block");
    }, 1200);

    setTimeout(function() {
        document.getElementsByClassName("first--slide")[0].setAttribute("style", "display:none;");
        secondCanvas.setAttribute("style", "display:block");
    }, 5000);

    setTimeout(function() {
        secondCanvas.setAttribute("style", "display:none");
        thirdCanvas.setAttribute("style", "display:block");
    }, 8000);
}

// Hàm để xử lý sự kiện nhấp chuột vào nút
function handleButtonClick() {
                document.getElementById("toggle-music").style.display = "none";

    if (isPlaying) {
        audio.pause();
        button.textContent = 'Play Music';
    } else {
        audio.play().then(() => {
            console.log('Audio is playing');
            showSlides(); // Hiển thị slide khi âm thanh bắt đầu phát
        }).catch(error => {
            console.error('Failed to play audio:', error);
        });
        button.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
}

// Thêm sự kiện click cho nút
document.addEventListener('click', (event) => {
    handleButtonClick();
});
