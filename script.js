window.addEventListener("DOMContentLoaded", async () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".card",
        start: "top 50%",
        // markers: true,
        scrub: true,
      },
    })
    // カードの回転
    .to(".card", {
      rotateY: 180,
      duration: 0.01,
    })
    // カードの回転と同時に文字を入れ替える
    .to(".header-text", {
      display: "none"
    })
    .to(".footer-text", {
      display: "block"
    });

  const stagger = 0.1;
  // sectionをトリガーに文字が浮かび上がる
  gsap.utils.toArray("section").forEach((el) => {
    const target = gsap.utils.selector(el);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      })
      // 飾りのｼｭﾝ
      .fromTo(target(".headline .rect"), {
        x: "-100%",
      }, {
        x: "100%",
        duration: 1,
        stagger,
        ease: "power3.inout",
      },
      )
      // 見出し文字がでる
      .fromTo(target(".headline .label"), {
        alpha: 0,
      }, {
        alpha: 1,
        duration: 0.3,
        delay: 0.5,
        stagger,
      },
        "<",
      )
      // 左から浮かび上がる
      .fromTo(target(".slideX"), {
        alpha: 0,
        x: -32,
      }, {
        alpha: 1,
        x: 0,
        duration: 0.75,
        delay: 0.2,
        stagger,
        ease: "power3.out",
      },
        "<",
      )
      // 下から浮かび上がる
      .fromTo(target(".slideY"), {
        alpha: 0,
        y: 32,
      }, {
        alpha: 1,
        y: 0,
        duration: 0.75,
        delay: 0.2,
        stagger,
        ease: "power3.out"
      },
        "<",
      )
      ;
  });


  // 右の画像の表示域 = エレメントの高さ
  const elHeight = document.querySelector('.mickey__wrap-right').clientHeight;
  // 右の画像の表示域 - ボールの表示域 = スライダーしたい高さ
  const sliderHeight = elHeight - document.querySelector('.mickey__wrap-left').clientHeight;

  // ハートの位置を固定する
  gsap.timeline()
    .to('.mickey__wrapper', {
      scrollTrigger: {
        trigger: '.mickey__wrap-left',
        // markers: true,
        pin: true,
        scrub: true,
        start: 'center center',
        // '+='でアニメーション開始位置から、という指定になる
        end: '+=' + sliderHeight
      }
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.mickey__wrap-left',
        // markers: true,
        scrub: true,
        start: 'center center',
        end: '+=' + sliderHeight
      },
    })
    .to('.gradation', {
      background: 'linear-gradient(180deg, #fffbd5 0%, #D384AE 30%)',
    })
    .to('.mickey__text', {
      color: '#eee',
    })
    ;

  // // ハートが回転しながら動く
  // gsap.to(".move", {
  //   x: 900,
  //   rotation: 360,
  //   duration: 15,
  //   scrollTrigger: {
  //     trigger: ".move_heart_trigger",
  //     start: "top 80%",
  //     // markers: true,
  //     scrub: true,
  //   },
  // });
});