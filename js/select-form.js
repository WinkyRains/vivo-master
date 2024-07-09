document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const contentArea = document.getElementById('dynamicContent');

    categories.forEach(function(category) {
        category.addEventListener('mouseover', function() {
            const contentId = this.getAttribute('data-content');
            contentArea.innerHTML = `<p>${contentId}</p>`;
        });
    });
});
// 商城页面分类菜单选择