/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  $(window).resize(function() {
    var width = $(window).width();
    if (width > 991) {
      $('.nav-menu').removeAttr('style');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Zeng, zhi-wei.", "Designer.", "Developer."],
      typeSpeed: 100,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Work Experience
  // ========================================================================= //


  $('.work-experience-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 } }
    });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Skills isotope and filter
// ========================================================================= //
$(window).load(function(){

  var skillsIsotope = $('.skills-container').isotope({
    itemSelector: '.skills-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#skills-filters li').on( 'mouseenter click', function() {
    $("#skills-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    skillsIsotope.isotope({ filter: $(this).data('filter') });
  });

})

// ========================================================================= //
//  Accomplishment show and hide
// ========================================================================= //

function showAccomplishment() {
  $(".accomplishment").toggleClass('d-none');
}

// ========================================================================= //
//  Translation Data
// ========================================================================= //

const translations = {
  "zh": {
    "skills": {
      "core": {
        "laravel": {
          "role": "後端架構設計 & ISO27001 資安合規",
          "list": "<li>確保符合 ISO27001 標準，使用 CheckMarx 源碼檢測並修補資安漏洞。</li><li>規劃與建置多項內部服務系統及資料交換系統。</li><li>實作高併發任務的佇列系統。</li>"
        },
        "vue": {
          "role": "前端組件化設計",
          "list": "<li>維護企業級系統的 TypeScript 程式碼，提升嚴謹度。</li><li>使用 Nuxt.js 開發企業形象官網與內部 SPA 工具。</li><li>串接後端 API 實現動態資料渲染。</li>"
        },
        "php": {
          "role": "8年以上經驗 & 新人指導",
          "list": "<li>擔任 Mentor 指導 3-5 人，並在其間落實 Code Review。</li><li>深入理解物件導向與設計模式。</li><li>具備重構 ColdFusion/Yii 舊有系統至現代化架構的經驗。</li>"
        },
        "wordpress": {
          "role": "CMS 客製化與 Multisite 架構",
          "list": "<li>開發客製化外掛提升彈性，並建置支援 No-Code / Low-Code 操作的底層架構。</li><li>建置 Multisite 架構以降低維運成本，多項行銷策展頁面開發及串接經驗。</li><li>開發及維運高流量新聞入口網，並擁有最佳化系統效能與使用者體驗經驗。</li>"
        },
        "aws": {
          "role": "IaC, 監控與容器化",
          "list": "<li>協助導入 Grafana，實作系統資源與流量的可視化，縮短修復時間提升主機可用率。</li><li>導入 Docker Multi-stage builds 優化部署流程。</li><li>使用 Docker Compose 統一本地開發環境。</li>"
        },
        "python": {
          "role": "自動化與 Serverless",
          "list": "<li>使用 AWS Lambda 實作無伺服器信件排程。</li><li>開發專案協作輔助工具，提升團隊行政效率。</li><li>自動化匯入繁瑣的貨運資料，大幅降低人工錯誤。</li>"
        },
        "api": {
          "role": "系統整合與介接",
          "list": "<li>開發飛航資料交換 API。</li><li>建置內容管理系統的中台 API。</li><li>標準化 API 回應格式與撰寫 Swagger 文件。</li>"
        },
        "mysql": {
          "role": "資料庫設計",
          "list": "<li>設計複雜商業邏輯的資料表關聯。</li><li>優化慢查詢提升系統效能。</li><li>規劃資料備份與遷移策略。</li>"
        },
        "redis": {
          "role": "快取策略與效能",
          "list": "<li>實作快取層降低資料庫負載。</li><li>應用於分散式系統的 Session 管理。</li><li>優化 B/C 端系統回應速度。</li>"
        },
        "test": {
          "role": "品質保證",
          "list": "<li>推動團隊採用 TDD 與單元測試。</li><li>顯著降低正式環境的 Bug 發生率。</li><li>確保系統重構過程中的穩定性。</li>"
        }
      }
    }
  },
  "en": {
    "skills": {
      "core": {
        "laravel": {
          "role": "Backend Architecture & ISO27001 Security",
          "list": "<li>Ensured ISO27001 compliance by fixing vulnerabilities using CheckMarx.</li><li>Architected multiple internal service systems and data exchange platforms.</li><li>Implemented high-concurrency Queue systems.</li>"
        },
        "vue": {
          "role": "Frontend Component Design",
          "list": "<li>Maintained enterprise-grade TypeScript codebases to enhance robustness.</li><li>Developed corporate websites and internal SPA tools using Nuxt.js.</li><li>Integrated backend APIs for dynamic data rendering.</li>"
        },
        "php": {
          "role": "8+ Years Experience & Mentoring",
          "list": "<li>Served as a Mentor for 3-5 developers, implementing Code Reviews.</li><li>Deep understanding of OOP and Design Patterns.</li><li>Experience in refactoring legacy ColdFusion/Yii systems into modern architectures.</li>"
        },
        "wordpress": {
          "role": "CMS Customization & Multisite",
          "list": "<li>Developed custom plugins and built the foundation for No-Code / Low-Code workflows.</li><li>Built Multisite architecture to reduce operational costs for marketing campaigns.</li><li>Optimized performance and UX for high-traffic news portals.</li>"
        },
        "aws": {
          "role": "IaC, Monitoring & Containerization",
          "list": "<li>Implemented Grafana for visualization, reducing recovery time and increasing availability.</li><li>Optimized deployment using Docker Multi-stage builds.</li><li>Standardized local development with Docker Compose.</li>"
        },
        "python": {
          "role": "Automation & Serverless",
          "list": "<li>Implemented serverless email scheduling using AWS Lambda.</li><li>Developed utilities to streamline project collaboration workflows.</li><li>Automated complex cargo data ingestion to eliminate manual errors.</li>"
        },
        "api": {
          "role": "System Integration",
          "list": "<li>Developed Flight Data Exchange APIs.</li><li>Built Middleware APIs for content management systems.</li><li>Standardized API responses and wrote Swagger documentation.</li>"
        },
        "mysql": {
          "role": "Database Design",
          "list": "<li>Designed database schemas for complex business logic.</li><li>Optimized slow queries to improve system performance.</li><li>Planned data backup and migration strategies.</li>"
        },
        "redis": {
          "role": "Caching & Performance",
          "list": "<li>Implemented caching layers to reduce database load.</li><li>Used for session management in distributed systems.</li><li>Optimized response speeds for B2B/B2C systems.</li>"
        },
        "test": {
          "role": "Quality Assurance",
          "list": "<li>Promoted TDD and Unit Testing adoption within the team.</li><li>Significantly reduced bug rates in production.</li><li>Ensured system stability during refactoring processes.</li>"
        }
      }
    }
  },
  "jp": {
    "skills": {
      "core": {
        "laravel": {
          "role": "バックエンド設計 & ISO27001準拠",
          "list": "<li>ISO27001基準に準拠し、CheckMarxを用いて脆弱性を修正。</li><li>複数の社内サービスおよびデータ交換システムの設計・構築。</li><li>高負荷タスク処理のためのQueueシステムの実装。</li>"
        },
        "vue": {
          "role": "フロントエンド設計",
          "list": "<li>企業向けシステムのTypeScriptコードを保守し、堅牢性を向上。</li><li>Nuxt.js を使用した企業公式サイトおよび社内SPAツールの開発。</li><li>バックエンドAPIとの連携による動的データの表示。</li>"
        },
        "php": {
          "role": "8年以上の経験 & 新人指導",
          "list": "<li>メンターとして3〜5名を指導し、コードレビューを定着化。</li><li>オブジェクト指向（OOP）およびデザインパターンの深い理解。</li><li>レガシーシステム（ColdFusion/Yii）をモダンな設計へリファクタリング。</li>"
        },
        "wordpress": {
          "role": "CMSカスタマイズ & マルチサイト",
          "list": "<li>独自プラグイン開発に加え、No-Code / Low-Code操作を可能にする基盤を構築。</li><li>運用コスト削減のためのマルチサイト構築。</li><li>高トラフィックなニュースサイトのパフォーマンス最適化。</li>"
        },
        "aws": {
          "role": "IaC, 監視 & コンテナ化",
          "list": "<li>Grafanaを導入してリソースを可視化し、復旧時間短縮と稼働率向上を実現。</li><li>Docker Multi-stage buildsによるデプロイプロセスの最適化。</li><li>Docker Composeによるローカル開発環境の統一。</li>"
        },
        "python": {
          "role": "自動化 & サーバーレス",
          "list": "<li>AWS Lambdaを用いたサーバーレスメール配信の実装。</li><li>プロジェクト協業を効率化する補助ツールを開発。</li><li>貨物データ取り込みを自動化し、人為的ミスを大幅に削減。</li>"
        },
        "api": {
          "role": "システム連携・統合",
          "list": "<li>運航データ交換APIの開発。</li><li>コンテンツ管理用ミドルウェアAPIの構築。</li><li>APIレスポンスの標準化およびSwaggerドキュメントの作成。</li>"
        },
        "mysql": {
          "role": "データベース設計",
          "list": "<li>複雑なビジネスロジックに対応したDBスキーマ設計。</li><li>スロークエリ改善によるシステムパフォーマンスの向上。</li><li>データバックアップおよび移行戦略の策定。</li>"
        },
        "redis": {
          "role": "キャッシュ戦略 & パフォーマンス",
          "list": "<li>DB負荷軽減のためのキャッシュ層の実装。</li><li>分散システムにおけるセッション管理への応用。</li><li>B/C向けシステムの応答速度の最適化。</li>"
        },
        "test": {
          "role": "品質保証 (QA)",
          "list": "<li>チームへのTDDおよび単体テストの導入推進。</li><li>本番環境におけるバグ発生率の大幅な低減。</li><li>リファクタリング中のシステム安定性の確保。</li>"
        }
      }
    }
  }
};

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let text = translations[lang];
    let isValid = true;
    
    for (let k of keys) {
      if (text && text[k]) {
        text = text[k];
      } else {
        isValid = false;
        break;
      }
    }
    
    if (isValid) {
      // If the text contains HTML (like <br>), use innerHTML
      if (text.includes('<') && text.includes('>')) {
        element.innerHTML = text;
      } else {
        element.textContent = text;
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(lang === 'zh' ? 'tw' : lang)) {
      btn.classList.add('active');
    }
  });

  localStorage.setItem('preferredLang', lang);
}
