export default defineContentScript({
  matches: ['*://*.wikipedia.org/*'],
  main() {
    console.log('🎉 Wikipedia content script loaded!');

    function onPageLoad() {
      console.log('📚 Wikipedia page loaded successfully!');

      const pageTitle = document.title;
      console.log('📖 Page title:', pageTitle);

      const isArticlePage = document.querySelector('#content') !== null;
      console.log('🔍 Is article page:', isArticlePage);

      const mainContent = document.querySelector('#mw-content-text');
      if (mainContent) {
        console.log('📄 Main content found');
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onPageLoad);
    } else {
      onPageLoad();
    }

    window.addEventListener('load', () => {
      console.log('🖼️ Page fully loaded with all resources');
    });
  },
});
