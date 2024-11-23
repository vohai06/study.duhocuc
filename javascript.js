console.log("JavaScript file loaded successfully!");

// Chuyển hướng về trang chính
function goBack()
{

    console.log("Go back button clicked! Redirecting...");

    window.location.href = "tong.html"; // Đường dẫn đến trang chính
}
function openDetails(element) 
{
    // Lấy dữ liệu từ các thuộc tính của thẻ HTML được nhấp
    const details = 
    {
        title: element.getAttribute("data-title"),
        intro: element.getAttribute("data-intro"),
        location: element.getAttribute("data-location"),
        strengths: element.getAttribute("data-strengths"),
        scholarships: element.getAttribute("data-scholarships"),
        image: element.getAttribute("data-image")
    };

    // Lưu dữ liệu vào localStorage
    localStorage.setItem("details", JSON.stringify(details));

    // Chuyển hướng sang trang chi tiết
    window.location.href = "details.html";
}
document.addEventListener("DOMContentLoaded", () => 
{
    // Lấy dữ liệu từ localStorage
    const details = JSON.parse(localStorage.getItem("details"));

    if (details) 
    {
        // Sử dụng innerHTML để hiển thị đúng định dạng HTML
        document.getElementById("detail-title").innerText = details.title || "Không có tiêu đề";
        document.getElementById("detail-info").innerHTML = details.intro || "Không có thông tin";
        document.getElementById("detail-location").innerHTML = details.location || "Chưa cập nhật vị trí";
        document.getElementById("detail-strengths").innerHTML = details.strengths || "Không có thông tin thế mạnh";
        document.getElementById("detail-scholarships").innerHTML = details.scholarships || "Không có thông tin học bổng";
        document.getElementById("detail-image").src = details.image || "default.jpg";
    } else 
    {
        console.error("Không tìm thấy dữ liệu trong localStorage!");
    }
});
