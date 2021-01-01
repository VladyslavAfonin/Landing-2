(function () {
  'use strict';

  function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    var _counterLength = 60;

    for (var counter = 0; counter < _counterLength; counter++) {
      innerDate(counter, 'date-');
      innerDate(counter, 'date');
    }

    function innerDate(counter, dateType) {
      var newCounter;
      dateType === 'date-' ? newCounter = -counter : newCounter = counter;

      var _msInDay = 86400000,
          _localDate = new Date(Date.now() + newCounter * _msInDay),
          _day = _localDate.getDate(),
          _month = _localDate.getMonth() + 1,
          _year = _localDate.getFullYear();

      var dayDefault = addZero(_day),
          monthDefault = addZero(_month),
          defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
      var dateClass = dateType + counter,
          nodeList = document.querySelectorAll('.' + dateClass);

      for (var i = 0; i < nodeList.length; i++) {
        var dateFormat = nodeList[i].dataset.format;
        dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, monthDefault, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate;
      }
    }

    function changeFormat(_day, _month, _year, format, counter) {
      var innerFormat = format;
      var testFormat = ["dd", "mm", "yyyy", "year"],
          dateFormat = {
        dd: _day,
        mm: _month,
        yyyy: _year,
        year: getYearWithCounter(_year, counter)
      };

      for (var i = 0; i < testFormat.length; i++) {
        var string = testFormat[i];
        var regExp = new RegExp(string);
        innerFormat = innerFormat.replace(regExp, dateFormat[string]);
      }

      return innerFormat.split(' ').join(' ');
    }

    function getYearWithCounter(year, counter) {
      return year + counter;
    }

    function addZero(numb) {
      return numb < 10 ? '0' + numb : numb;
    }
  }

  if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {
      postDate();
    });
  }

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 1500);
    });
  });

  function conception () {
    $('.js-conception-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
      nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
      dots: true,
      adaptiveHeight: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1219,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      }, {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          adaptiveHeight: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    });
  }

  function winter () {
    window.onscroll = function () {
    };

    $(window).scroll(function () {
      var windowWidth = $(this).width();
      var windowScrollTop = $(this).scrollTop();

      var snowflake = function snowflake() {
        $('.snowflake').addClass("active");
      };

      if (windowWidth >= 1024) {
        if (windowScrollTop > 2270 && windowScrollTop < 2420) {
          snowflake();
        }

        if (windowScrollTop > 2850 || windowScrollTop < 1900) {
          $('.snowflake').removeClass("active");
        }
      }
    });
  }

  function scientists () {
    $('.js-scientists-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
      nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
      dots: true,
      adaptiveHeight: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  var header = (function () {
    var burger = document.querySelector('.header__burger');
    var mobMenu = document.querySelector('.header__mob');
    var mobMenuBg = document.querySelector('.header__bg');
    var mobClose = document.querySelector('.top__close');
    var links = document.querySelectorAll('.item__link');
    burger.addEventListener('click', function () {
      mobMenu.classList.toggle('open');
    });
    mobClose.addEventListener('click', function () {
      mobMenu.classList.toggle('open');
    });
    mobMenuBg.addEventListener('click', function () {
      mobMenu.classList.toggle('open');
    });

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', hideMenu);
    }

    function hideMenu() {
      if (document.documentElement.clientWidth < 1024) {
        mobMenu.classList.toggle('open');
      }
    }
  });

  function about () {
    $('.js-about-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
      nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
      dots: true,
      adaptiveHeight: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 639,
        settings: {
          adaptiveHeight: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    });
  }

  function nutrients () {
    var windowHeight = $(window).height();
    $(document).on("scroll", function () {
      $(".nutrients").each(function () {
        var self = $(this),
            height;

        if (self.height() >= windowHeight) {
          height = self.offset().top + windowHeight - 100;
        } else {
          height = self.offset().top + self.height();
        }

        if ($(document).scrollTop() + windowHeight >= height) {
          self.addClass("show");
        } else {
          self.removeClass("show");
        }
      });
    });
  }

  function reviews () {
    //open and hide form
    $(".header__btn").click(function () {
      $(".reviews__background").show();
    });
    $(".feedback__close").click(function () {
      $(".reviews__background").fadeOut();
    }); //add photo

    var inputFile = $('.input-file');
    var labelFile = $('.reviews-form__file');
    var fileText = $('.reviews-form__file-text');
    var fileImg = $('.reviews-form__file-img img');
    var fileIcon = $('.reviews-form__checkmark-icon');
    var fileFlag = true;
    inputFile.change(function (e) {
      if (inputFile.val() && fileFlag) {
        fileText.html('Загружено!');
        fileImg.hide();
        fileIcon.show();
        labelFile.addClass('rloaded');
        fileFlag = false;
      }
    });
    inputFile.click(function () {
      if (!fileFlag) {
        return false;
      }
    }); // Calculate rating statistics

    function roundToTwo(num) {
      var snum = String(num),
          spl = null;

      if (snum.indexOf('.') != -1) {
        var spl = snum.split('.');
      } else if (String(num).indexOf(',') != -1) {
        var spl = snum.split(',');
      }

      if (spl != null && spl[1].length > 2) {
        return "".concat(spl[0], ".").concat(spl[1].substr(0, 2));
      }

      return snum;
    }

    function CalculateStats() {
      var ratedFive = document.querySelector("#totalWithRating5"),
          ratedFour = document.querySelector("#totalWithRating4"),
          ratedThree = document.querySelector("#totalWithRating3"),
          ratedTwo = document.querySelector("#totalWithRating2"),
          ratedOne = document.querySelector("#totalWithRating1"),
          avgMark = document.querySelector("#avgMark"),
          avgQuality = document.querySelector("#avgQuality"),
          avgPrice = document.querySelector("#avgPrice");
      var commentItems = $(".js-list-reviews");
      var rates = [0, 0, 0, 0, 0];
      var averages = [0, 0, 0]; // mark, quality, price

      for (var idx = 0; idx < commentItems.length; idx++) {
        rates[Number(commentItems[idx].dataset.rating - 1)] += 1;
        averages[0] += Number(commentItems[idx].dataset.rating);
        averages[1] += Number(commentItems[idx].dataset.quality);
        averages[2] += Number(commentItems[idx].dataset.price);
      }

      ratedFive.innerHTML = rates[4];
      ratedFour.innerHTML = rates[3];
      ratedThree.innerHTML = rates[2];
      ratedTwo.innerHTML = rates[1];
      ratedOne.innerHTML = rates[0];
      avgMark.innerHTML = roundToTwo(averages[0] / commentItems.length);
      avgQuality.innerHTML = roundToTwo(averages[1] / commentItems.length);
      avgPrice.innerHTML = roundToTwo(averages[2] / commentItems.length);
      var qualityBg = roundToTwo(averages[1] / commentItems.length * 100 / 5);
      var priceBg = roundToTwo(averages[2] / commentItems.length * 100 / 5);
      $("#orangeQuality").css("width", qualityBg + "%");
      $("#orangePrice").css("width", priceBg + "%");

      if (qualityBg == 100) {
        $("#orangeQuality").css("border-radius", "3px");
      }

      if (priceBg == 100) {
        $("#orangePrice").css("border-radius", "3px");
      }

      if (priceBg != 20 || priceBg != 40 || priceBg != 60 || priceBg != 80 || priceBg != 100) {
        $("#orangePrice").css("border-right", "2px solid white");
      }

      if (qualityBg != 20 || qualityBg != 40 || qualityBg != 60 || qualityBg != 80 || qualityBg != 100) {
        $("#orangeQuality").css("border-right", "2px solid white");
      }

      var fiveBgPercent = rates[4] / commentItems.length * 100;
      $("#orange5").css("width", fiveBgPercent + "%");
      var fourBgPercent = rates[3] / commentItems.length * 100;
      $("#orange4").css("width", fourBgPercent + "%");
      var threeBgPercent = rates[2] / commentItems.length * 100;
      $("#orange3").css("width", threeBgPercent + "%");
      var twoBgPercent = rates[1] / commentItems.length * 100;
      $("#orange2").css("width", twoBgPercent + "%");
      var oneBgPercent = rates[0] / commentItems.length * 100;
      $("#orange1").css("width", oneBgPercent + "%");
    }

    function customerReaction() {
      $('.js-reaction').click(function (e) {
        var target = $(e.target),
            dislikeImg = target.parent().next().children().first(),
            likeImg = target.parent().prev().children().first(),
            dislikeCount = target.parent().next().children().last(),
            likeCount = target.parent().prev().children().last();

        if (target.hasClass('like')) {
          target.toggleClass('used');
          target.toggleClass('like-active');
          dislikeImg.removeClass('dislike-active');
          target.parent().toggleClass('like-active');
          target.parent().next().removeClass('dislike-active');

          if (target.hasClass('like-active')) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (dislikeImg.hasClass('used')) {
            dislikeCount.text(Number(dislikeCount.text()) - 1);
            dislikeImg.removeClass('used');
          }
        } else {
          target.toggleClass('used');
          target.toggleClass('dislike-active');
          likeImg.removeClass('like-active');
          target.parent().toggleClass('dislike-active');
          target.parent().prev().removeClass('like-active');

          if (target.hasClass('dislike-active')) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (likeImg.hasClass('used')) {
            likeCount.text(Number(likeCount.text()) - 1);
            likeImg.removeClass('used');
          }
        }

        $('.useful__yes').click(function (e) {
          var target = $(e.target);
          var child = target.find('.js-reaction');
          child.trigger('click');
        });
        $('.useful__no').click(function (e) {
          var target = $(e.target);
          var child = target.find('.js-reaction');
          child.trigger('click');
        });
        $('.yes__num').click(function (e) {
          var target = $(e.target);
          target.parent().trigger('click');
        });
        $('.no__num').click(function (e) {
          var target = $(e.target);
          target.parent().trigger('click');
        });
      });
    }

    customerReaction(); // stars (click or hover)

    function fillStars(starItem) {
      var starE = $(starItem),
          stars = document.querySelectorAll(starItem); //  Stars on mouse over

      starE.on('mouseover', function (e) {
        var onStar = parseInt($(e.target).data('value'), 10);

        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('hover');
        }

        for (var _i = 0; _i < onStar; _i++) {
          $(stars[_i]).addClass('hover');
        }
      }).on('mouseout', function () {
        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('hover');
        }
      }); //  Stars on click

      starE.on('click', function (e) {
        var onStar = parseInt($(e.target).data('value'), 10);

        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
        }

        for (var _i2 = 0; _i2 < onStar; _i2++) {
          $(stars[_i2]).addClass('selected');
        }
      });
    }

    fillStars('.quality__star');
    fillStars('.cost__star');
    fillStars('.appraisal__star');
    var $reviewInputTextarea = $(".feedback__area"),
        $reviewInputName = $(".input__wrapper--name input"),
        $reviewInputPhone = $(".input__wrapper--phone input");
    $reviewInputPhone.on('input', function () {
      $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''));
    });
    $(".reviews__feedback").on("submit", function (evt) {
      if ($reviewInputTextarea.val().length === 0 && $reviewInputPhone.val() && $reviewInputName.val()) {
        return;
      }

      evt.preventDefault();
      $reviewInputName.val('');
      $reviewInputPhone.val('');
      $reviewInputTextarea.val('');
      $('<p class="success-message">Спасибо, Ваш отзыв отправлен на модерацию!</p>').insertAfter('.feedback__button');
      fileText.html('Добавить фото');
      fileImg.show();
      fileIcon.hide();
      labelFile.removeClass('rloaded');
      fileFlag = true;
      setTimeout(function () {
        $('.success-message').fadeOut();
        $('.reviews__background').fadeOut();
      }, 5000);
      $('.quality__star').removeClass('hover');
      $('.quality__star').removeClass('selected');
      $('.cost__star').removeClass('hover');
      $('.cost__star').removeClass('selected');
      $('.appraisal__star').removeClass('hover');
      $('.appraisal__star').removeClass('selected');
    });
    CalculateStats();
  }

  function questions () {
    (function () {
      $(document).click(function (event) {
        if ($(event.target).closest(".questions__item").length) return;
        $(".questions__item.active").removeClass("active");
      });
      $(".questions__item").click(function () {
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
      });
    })();
  }

  var Review = function Review() {

    var reviewsItemCollection = document.querySelectorAll('.js-list-reviews'),
        reviewsItemCollectionActive = document.querySelectorAll('.js-list-reviews.active'),
        reviewsItemCollectionLength = reviewsItemCollection.length,
        reviewsCount = document.querySelector('.js-reviews-count'),
        reviewsActiveCount = document.querySelector('.js-reviews-active-count'),
        textSelected = document.querySelectorAll('.js-text__selected'),
        floatingCircles = document.querySelector('#floatingCirclesG'),
        reviewsOpen = document.querySelector('.reviews__open'),
        reviewsClose = document.querySelector('.reviews__close');
    var reviewsItemCollectionActiveLength = reviewsItemCollectionActive.length,
        flagFor = false;
    var comments = document.querySelectorAll('.js-list-reviews'),
        commentsSort = document.querySelectorAll('.js-menu-item'),
        commentsContant = document.querySelector('.js-content__list');

    function changeActiveReviewsSum() {
      reviewsActiveCount.innerHTML = reviewsItemCollectionActiveLength;
    }

    function changeReviewsSum() {
      reviewsCount.innerHTML = reviewsItemCollectionLength;
    }

    changeReviewsSum();
    changeActiveReviewsSum();

    var _loop = function _loop(i) {
      commentsSort[i].addEventListener('click', function () {
        var arr = [],
            indexArr = [],
            nodesArr = [],
            newArr = [];
        comments.forEach(function (el, index) {
          arr.push(new Object({
            index: index,
            rating: el.dataset.rating
          }));
          arr.sort(function (prev, next) {
            if (prev.rating < next.rating) return -1;
            if (prev.rating < next.rating) return 1;
          });
          nodesArr.push(el);
        });
        arr.forEach(function (el) {
          return indexArr.push(el.index);
        });

        for (var p = 0; p < nodesArr.length; p++) {
          if (nodesArr[p].classList.contains('active')) {
            nodesArr[p].classList.remove('active');
          }
        }

        indexArr.forEach(function (el) {
          if (commentsSort[i].classList.contains('js-menu-item-1')) {
            newArr.unshift(nodesArr[el].outerHTML);
          } else {
            newArr.push(nodesArr[el].outerHTML);
          }
        });
        floatingCircles.classList.add('active');
        commentsContant.innerHTML = [];

        function changeSortComments() {
          floatingCircles.classList.remove('active');
          var strArr = newArr.join(' ');
          commentsContant.innerHTML = strArr;
          var newCommentsContant = document.querySelectorAll('.js-list-reviews');

          for (var j = 0; j < newCommentsContant.length; j++) {
            if (j < reviewsItemCollectionActiveLength) {
              newCommentsContant[j].classList.add('active');
            }
          }

          reaction();
        }

        setTimeout(changeSortComments, 2000);

        for (var h = 0; h < textSelected.length; h++) {
          if (commentsSort[i].classList.contains('js-menu-item-1') && textSelected[h].classList.contains('js-menu-item-1')) {
            textSelected[h].classList.add('active');
          } else if (commentsSort[i].classList.contains('js-menu-item-2') && textSelected[h].classList.contains('js-menu-item-2')) {
            textSelected[h].classList.add('active');
          } else {
            textSelected[h].classList.remove('active');
          }
        }

        flagFor = true;
        $(".sort__menu").toggleClass("show");
      });
    };

    for (var i = 0; i < commentsSort.length; i++) {
      _loop(i);
    }

    function reaction() {
      var reactionBlock = document.querySelectorAll('.js-reaction');

      if (flagFor) {
        reactionBlock = document.querySelectorAll('.js-reaction');
        console.log('+');
      }

      for (var _i = 0; _i < reactionBlock.length; _i++) {
        reactionBlock[_i].addEventListener('click', function (e) {
          var target = $(e.target),
              dislikeImg = target.parent().next().children().first(),
              likeImg = target.parent().prev().children().first(),
              dislikeCount = target.parent().next().children().last(),
              likeCount = target.parent().prev().children().last();

          if (target.hasClass('like')) {
            target.toggleClass('used');
            target.toggleClass('like-active');
            dislikeImg.removeClass('dislike-active');
            target.parent().toggleClass('like-active');
            target.parent().next().removeClass('dislike-active');

            if (target.hasClass('like-active')) {
              target.next().text(Number(target.next().text()) + 1);
            } else {
              target.next().text(Number(target.next().text()) - 1);
            }

            if (dislikeImg.hasClass('used')) {
              dislikeCount.text(Number(dislikeCount.text()) - 1);
              dislikeImg.removeClass('used');
            }
          } else {
            target.toggleClass('used');
            target.toggleClass('dislike-active');
            likeImg.removeClass('like-active');
            target.parent().toggleClass('dislike-active');
            target.parent().prev().removeClass('like-active');

            if (target.hasClass('dislike-active')) {
              target.next().text(Number(target.next().text()) + 1);
            } else {
              target.next().text(Number(target.next().text()) - 1);
            }

            if (likeImg.hasClass('used')) {
              likeCount.text(Number(likeCount.text()) - 1);
              likeImg.removeClass('used');
            }
          }
        });
      }
    }

    reviewsOpen.addEventListener('click', function () {
      if (flagFor) {
        comments = document.querySelectorAll('.js-list-reviews');
        reaction();
      }

      var divyArray = [];

      for (var i = 0; i < comments.length; i++) {
        divyArray.push(comments[i]);
      }

      var fromReview = reviewsItemCollectionActiveLength,
          toReview = reviewsItemCollectionActiveLength + 5;
      var newReviews = divyArray.slice(fromReview, toReview);

      if (toReview === reviewsItemCollectionLength) {
        reviewsOpen.classList.add('inactive');
      }

      reviewsClose.classList.add('active');

      for (var h = 0; h < newReviews.length; h++) {
        newReviews[h].classList.add('active');
      }

      reviewsItemCollectionActiveLength += 5;
      changeActiveReviewsSum();
    });
    reviewsClose.addEventListener('click', function () {
      if (flagFor) {
        comments = document.querySelectorAll('.js-list-reviews');
      }

      var divyArray = [];

      for (var i = 0; i < comments.length; i++) {
        divyArray.push(comments[i]);
      }

      var fromReviewClose = reviewsItemCollectionActiveLength - 5,
          toReviewClose = reviewsItemCollectionActiveLength;
      var newReviewsClose = divyArray.slice(fromReviewClose, toReviewClose);

      if (fromReviewClose == 5) {
        reviewsClose.classList.remove('active');
      }

      if (fromReviewClose < 25 && reviewsOpen.classList.contains('inactive')) {
        reviewsOpen.classList.remove('inactive');
      }

      for (var h = 0; h < newReviewsClose.length; h++) {
        newReviewsClose[h].classList.remove('active');
      }

      reviewsItemCollectionActiveLength -= 5;
      changeActiveReviewsSum();
    });
    $(".sort__open").click(function () {
      $(".sort__menu").toggleClass("show");
    });
  };

  function main() {
    scrollSmooth();
    header();
    conception();
    about();
    winter();
    scientists();
    nutrients();
    questions();
    Review();
    reviews();
  }

  if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll', function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
  } else {
    main();
  }

}());
