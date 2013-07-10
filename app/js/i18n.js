'use strict';

angular.module('app.i18n', [])
  .service('langSrvc', function(modelSrvc, getByPath, LANG, DEFAULT_LANG, DEFAULT_DIRECTION) {
    var model = modelSrvc.model;
    function lang() {
      return getByPath(model, '/settings/lang') ||
             getByPath(model, '/system/lang') ||
             DEFAULT_LANG;
    }
    function direction() {
      return LANG[lang()].dir || DEFAULT_DIRECTION;
    }
    return {
      lang: lang,
      direction: direction
    };
  })
  .constant('TRANSLATIONS', {
    zh: {
      HELP_TRANSLATE: '帮助翻译'
    },
    fa: {
      HELP_TRANSLATE: 'کمک برای ترجمه',
      LANTERN: 'لنترن',
      LANGUAGE: 'زبان',
      URL: 'آدرس اینترنتی',
      SHA1: 'SHA-1',
      WAITING_FOR_LANTERN: 'برای لنترن کمی صبرکنید...',
      UNEXPECTED_STATE_TITLE: 'حالت غیرمنتظره',
      UNEXPECTED_STATE_PROMPT: 'لنترن با یک حالت غیرمنتظره مواجه شده است. سعی کنید دوباره برنامه را بروزرسانی کنید اما اگر همچنان این وضعیت ادامه داشت، از برنامه خارج شوید و دوباره بارگزاری کنید. گزارش دادن در رابطه با مشکلات لنترن به توسعه‌دهندگان کمک می‌کند تا سرعت رفع این مشکلات را بهبود ببخشند',
      RESET: 'تنظیم مجدد',
      REFRESH: 'تازه کردن',
      SETTINGS_UNLOCK_TITLE: 'بازکردن تنظیمات',
      SETTINGS_UNLOCK_PROMPT: 'رمز عبور لنترن خود را وارد کنید تا تنظیمات برای شما نمایش داده شود',
      PASSWORD: 'رمزعبور',
      PASSWORD_CONFIRM: 'تایید رمز عبور',
      CREATE: 'ساختن',
      CREATED: 'ساخته شده',
      PASSWORDS_MUST_MATCH: 'رمزعبور باید مطابقت داشته باشد',
      PASSWORD_INVALID: 'رمزعبور اشتباه است',
      UNLOCK: 'گشودن',
      UNLOCKED: 'گشوده شده',
      SETTINGS_LOAD_FAILURE_TITLE: 'امکان بارگزاری تنظیمات وجود ندارد',
      SETTINGS_LOAD_FAILURE_PROMPT: 'تنظیمات شما نمی‌تواند بارگزاری شود. دوباره امتحان کنید, اما اگر همچنان این وضعیت ادامه داشت، از برنامه خارج شوید و دوباره بارگزاری کنید. گزارش دادن در رابطه با مشکلات لنترن به توسعه‌دهندگان کمک می‌کند تا سرعت رفع این مشکلات را بهبود ببخشند',
      NOTIFY_LANTERN_DEVS: 'به توسعه دهندگان لنترن اطلاع دهید',
      UNEXPECTED_ERROR: 'یک خطای غیرمنتظره رخ داده است.',
      ERROR: 'یک خطا رخ داده است.',
      QUIT: 'خروج',
      RETRY: 'دوباره امتحان کنید',
      PASSWORD_CREATE_TITLE: 'ساختن رمزعبور',
      PASSWORD_CREATE_PROMPT: 'یک رمزعبور قوی خوب برای لنترن خود انتخاب کنید تا اطلاعات شما در امنیت باشند',
      BETA: 'آزمایشی',
      TAG_LINE: 'اینترنت آزاد برای همه',
      GIVE_ACCESS: 'دادن دسترسی',
      GET_ACCESS: 'گرفتن دسترسی',
      INTERNET_REQUIRED: 'برای ادامه، لطفا به اینترنت متصل شوید',
      NO_PROXIES: 'Can’t reach any Lantern users through your social network who are giving access. You will be able to get <br>access once you can reach some. Leave Lantern running to continue trying to reach some Give Access users.',
      CONNECTION_OFFLINE: 'وضعیت اینترنت شما درحالت آفلاین است.',
      AUTHORIZE_TITLE: 'از طریق گوگل وارد شوید.',
      AUTHORIZE_PROMPT: 'لنترن به شما این امکان را می‌دهد تا از طریق حساب گوگل خود وارد شوید.',
      AUTHORIZE_TIP_GTALK: 'لنترن با یک شبکه بزرگ کاربرانی فعالیت می‌کند که هر کاربر به دیگری اعتماد دارد. وقتی شما از طریق حساب کاربری گوگل وارد شوید می‌توانید از این طریق با دوستان قابل اعتماد خود در تماس باشید.',
      AUTHORIZE_EXTERNAL: 'اینجا کلیک کنید تا به google.com بروید.',
      HELP: 'راهنما',
      WHY: 'چرا؟',
      AUTHORIZE_LANTERN: 'وارد شوید',
      EMAIL_PLACEHOLDER: 'email@example.com',
      CANCEL: 'انصراف',
      CONTINUE: 'ادامه',
      UPDATE: 'بروزرسانی',
      WAITING: 'صبرکنید...',
      UPDATING: 'بروزرسانی...',
      CONFIGURING: 'پیکره‌بندی...',
      CONNECTING: 'درحال اتصال...',
      CONNECTED: 'متصل شد.',
      CONNECTING_TITLE: 'درحال اتصال...',
      NOT_INVITED_TITLE: 'کاربر دعوت نشده است',
      NOT_INVITED_PROMPT: 'این کاربری که شما سعی بر ارتباط با او دارید تا این لحظه به لنترن دعوت نشده است.',
      TRY_ANOTHER_USER: 'یک کاربر دیگر را امتحان کنید',
      REQUEST_INVITE: 'درخواست دعوت',
      REQUEST_INVITE_TITLE: 'دخواست دعوت',
      REQUEST_INVITE_PROMPT: 'درخواست دعوت‌نامه از :',
      SOMEONE_I_KNOW_LABEL: 'کسی که من می‌دانم از لنترن استفاده می‌کند',
      SOMEONE_I_KNOW_INFO: 'اگر کاربر مورد نظر یک کاربر شناخته شده باشد، او بلافاصله یک پیام حاوی درخواست شما را دریافت می‌کند',
      LANTERN_DEVS_LABEL: 'توسعه دهندگان لنترن',
      LANTERN_DEVS_INFO: 'دعوت نامه برای کاربر جدید در سریعترین زمانی که در شبکه پیدا شوند ارسال می‌شود',
      SEND_REQUEST: 'ارسال درخواست',
      SENDING_REQUEST: 'درحال ارسال...',
      REQUEST_SENT_TITLE: 'درخواست ارسال شد',
      REQUEST_SENT_PROMPT: 'درخواست شما ارسال شد. بزودی وقتی شما دعوت شدید یک ایمیل برای شما ارسال می‌شود. شما همچنان می‌توانید از نسخه نمایشی لنترن استفاده کنید.', // XXX can't send email if we only store hashes of emails
      FIRST_INVITE_RECEIVED_TITLE: 'دعوت‌نامه دریافت شد.',
      FIRST_INVITE_RECEIVED_INTRO: 'شما یک دعوت نامه از لنترن برای عضویت دریافت کرده‌اید.',
      FIRST_INVITE_RECEIVED_SENDER: 'فرستنده این دعوت‌نامه :',
      FIRST_INVITE_RECEIVED_PROMPT: 'شما حالا قادر خواهید بود تا لنترن خود را راه‌اندازی کنید.',
      AUTHORIZE_LATER_TITLE: 'بعدا اجازه بده',
      AUTHORIZE_LATER_PROMPT: 'لنترن باز هم تلاش خواهد کرد که به گوگل متصل شود و وقتی این کار فراهم شد به شما دوباره پیام می‌دهد.شما همچنان می‌توانید از نسخه نمایشی لنترن استفاده کنید.',
      PROXIED_SITES_TITLE: 'سایت‌های پراکسی',
      CONFIGURE_PROXIED_SITES: 'سایت‌هایی که می‌خواهید از طریق لنترن به آنها دسترسی پیدا کنید را اینجا وارد کنید',
      PROXIED_SITES_PROMPT: 'بصورت پیش‌فرض, سایت‌هایی که در لیست زیر (سایت‌های پراکسی) هستند از طریق شبکه لنترن پراکسی میشوند.به خاطر داشته باشید که فقط با پراکسی کردن سایت‌هایی که احتیاج به پراکسی دارند، لنترن سریع تر عمل میکند و سخت تر بلاک می‌شود.',
      SEARCH: 'جستجو',
      NO_MATCHING_SITES: 'هیچ وب‌سایتی پیدا نشد',
      PROXYING_ALL_WARNING: 'هم‌اکنون تمام ترافیک شما از شبکه لنترن می‌گذرد',
      DISABLE_PROXY_ALL: 'غیرفعال کردن پراکسی از روی ترافیک اینترنت شما',
      PROXIED_SITES_TIP: 'تمام محتویات اطلاعات صفحات در این صفحه و تمام صفحات از طریق پراکسی عبور خواهند کرد.',
      ERROR_ONE_REQUIRED: 'حداقل یک وب سایت نیاز است.',
      ERROR_INVALID_LINE: 'خطای خط:',
      ERROR_MAX_PROXIED_SITES_EXCEEDED: 'تعداد سایت‌های پراکسی از حدمجاز فرا تر رفته است.',
      ERROR_SETTING_PROXIED_SITES: 'راه‌اندازی سایت‌های پراکسی با خطا مواجه شده است',
      ERROR_OPERATION_FAILED: 'Operation failed.',
      SYSTEM_PROXY_TITLE: 'پراکسی سیستم',
      SYSTEM_PROXY_PROMPT: 'بصورت پیش‌فرض، لنترن پراکسی مرورگر و سیستم شما را بصورت اتوماتیک تغییر می‌دهد.',
      SYSTEM_PROXY_TRUE: 'انتخاب پراکسی لنترن برای پراکسی پیش‌فرض سیستم (پیشنهاد می‌شود)',
      AUTO_PROXY: 'لنترن پراکسی سیستم شما را بصورت اتوماتیک مدیریت می‌کند.',
      SYSTEM_PROXY_FALSE: 'من خودم تنظیمات مرورگر را برای استفاده از لنترن تغییر خواهم داد',
      PAC_FILE_LOC: 'آدرس فایل PAC لنترن:',
      SYSTEM_PROXY_ERROR: 'پیکره‌بندی پراکسی ناموفقیت آمیز بود.',
      FINISHED_TITLE: 'تمام!',
      FINISHED_PROMPT_GIVE: 'کانکشن شما حالا برای به اشتراک گذاشتن در جامعه مجازی لنترن آماده است.',
      FINISHED_PROMPT_GET: 'شما اکنون با استفاده از شبکه اجتماعی لنترن قادر خواهید بود به سایت‌های پراکسی دسترسی پیدا کنید.',
      AUTOREPORT_PROMPT: 'به صورت ناشناس وامن آمار استفاده برنامه را به لنترن بفرستید تا به بهبود برنامه کمک کند. اطلاعات بیشتر ',
      FINISH: 'تمام',
      LANTERN_FRIENDS: 'دوستان لنترن',
      // XXX
      LANTERN_FRIENDS_INTRO: 'Lantern relies on a large network of users who trust one another to share internet connections. Enter the people you trust below, and you will be connected to other users through the resulting social network.',
      LANTERN_FRIENDS_COLON: 'دوستان لنترن:',
      PROXYING_ALL_TRAFFIC: 'پراکسی کردن تمام ترافیک رد و بدل شده',
      NO_NAME: '(نام در دسترس نیست)',
      NO_EMAIL: '(ایمیل در دسترس نیست)',
      NO_FRIENDS: 'شما درحال حاضر هیچ دوست لنترنی ندارید.',
      RETRIEVING_NINVITES: 'بازیابی تعداد دعوت‌نامه‌ها...',
      ADD_FRIENDS_PROMPT: 'اضافه کردن دوستان توسط گوگل‌تاک یا آدرس گوگل اپز آنها',
      SEARCHING_ELLIPSIS: 'درحال جستجو...',
      ENTER_VALID_EMAIL: 'یک ایمیل معتبر وارد کنید',
      NFRIENDS: {1: '1 Lantern friend', other: '{} Lantern friends'},
      NSUGGESTED: {1: '1 friend suggestion:', other: '{} friend suggesteds:'},
      SUGGESTED_FRIEND_WARNING: 'Only friend people you trust to share an internet connection.',
      FRIEND: 'Friend',
      DECLINE: 'نپذیرفتن',
      SETTINGS: 'تنظیمات',
      MODE: 'حالت',
      PROXY: 'پراکسی',
      MANAGE_PROXIED_SITES: 'مدیریت سایت‌های پراکسی...',
      ADVANCED: 'پیش‌رفته',
      PROXY_ALL_TRAFFIC: 'پراکسی کردن تمام ترافیک رد و بدل شده',
      APP: 'اپلیکیشن',
      SAVE_GTALK_PASSWORD: 'ذخیر رمز گوگل‌تاک بصورت امن',
      AUTO_START: 'اجرای لنترن بصورت خودکار وقتی سیستم شروع به کار کرد',
      SHOW_FRIEND_PROMPTS: 'Prompt to friend contacts running Lantern',
      SET_AS_SYSTEM_PROXY: 'قراردادن به عنوان پراکسی سیستم',
      NO_AUTOREPORT_WARNING: 'گزارش میزان مصرف از لنترن بصورت خودکار فعال نباشد',
      ENABLE_AUTOREPORT_SUGGESTION: 'بصورت خودکار میزان مصرف از لنترن برای بهبود کارایی برنامه فعال باشد',
      RESET_ELLIPSIS: 'تنظیم مجدد...',
      CLOSE: 'بستن',
      BACK: 'بازگشت',
      ABOUT: '‫درباره‬',
      ABOUT_TITLE: 'درباره لنترن',
      UPDATE_AVAILABLE_TITLE: 'بروزرسانی آماده است',
      UPDATE_AVAILABLE_PROMPT: 'نسخه جدیدی از لنترن آماده است',
      VERSION: 'نسخه',
      RELEASED: 'منتشر شده',
      MORE_INFO: 'اطلاعات بیشتر',
      UPDATE_AVAILABLE_PROMPT_RUNNING: 'هم اکنون در حال اجرا است...',
      UPDATE_PROMPT: 'لطفا بروزرسانی را انجام دهید تا مطمئن شوید آخرین تغییرات و امکانات جدید را دریافت کرده‌اید.',
      DOWNLOAD: 'دانلود',
      CONTACT: '‫تماس‬',
      CONTACT_TITLE: 'ارتباط با توسعه‌دهندگان لنترن',
      MESSAGE_PLACEHOLDER: '\n\n\n\n\n--\nتشخیق اطلاعات:\n',
      ERROR_TOO_LONG: {1: '1 حرف بسیار بلند می‌باشد', other: '{} حروف بسیار بلند می‌باشند'},
      SEND: 'ارسال',
      GIVE_MODE_FORBIDDEN_TITLE: 'دادن دسترسی به حالت ممنوعه',
      GIVE_MODE_FORBIDDEN_PROMPT: 'اینترنت شما از یک کشوری می‌آید که سانسور اینترنت در آن شدت دارد.دادن دسترسی از طریق این کانکشن می‌تواند برای کاربران دیگر ناخوشایند باشد. اگر شما از کشوری هستید که در آن سانسور اینترنت وجود ندارد می‌تواند در لنترن خود را در حالت دادن دسترسی قرار دهید.', // XXX say which country and source identifying it as censoring
      CONTINUE_IN_GET_MODE: 'ادامه برای حالت دسترسی',
      CONFIRM_RESET_TITLE: 'تایید راه اندازی مجدد',
      CONFIRM_RESET_PROMPT: 'راه اندازی مجدد لنترن به این معنا است که تمام اطلاعات ذخیره شده از ابتدای راه‌اندازی آن روی سیستم شما پاک خواهد شد.',
      BUG_REPORT_PROMPT: 'اطلاعات تکمیلی',
      NPEERS_ONLINE_GET: {1: '1 درحالت دسترسی قرار دارد', other: '{} درحالت دسترسی قرار دارند'},
      NPEERS_ONLINE_GIVE: {1: '1 درحالت دسترسی قرار دارد', other: '{} درحالت دسترسی قرار دارند'},
      NUSERS_ONLINE: {1: '1 کاربر آنلاین', other: '{} کاربران آنلاین'},
      NUSERS_EVER: {1: '1 کاربر فعال', other: '{} کاربران فعال'},
      LAST_CONNECTED: 'آخرین اتصال:',
      PCGIVE: 'گرفتن دسترسی لنترن در پی‌سی',
      PCGET: 'دادن دسترسی به لنترن در پی‌سی',
      PCUNKNOWN: 'پی‌سی لنترن (در انتظار اتصال)',
      CLOUDGIVE: 'پراکسی ابری لنترن',
      LAEPROXYGIVE: 'موتور اپلیکیشن پراکسی لنترن',
      UP: 'بالا',
      DN: 'پایین',
      TRANSFERRING_NOW: 'transferring now',
      TRANSFERRED_EVER: 'transferred ever',
      SENT: 'ارسال شده',
      RECEIVED: 'دریافت شده',
      TRANSFERRED_GLOBALLY: 'ارسال‌ها در کل',
      P: 'پتابایت',
      T: 'ترابایت',
      G: 'گیگابایت',
      M: 'مگابایت',
      K: 'کیلوبایت',
      B: 'بایت',
      AD: 'آندورا',
      AE: 'امارات متحده عربی',
      AF: 'افغانستان',
      AG: ' آنتیگوا و باربودا',
      AI: 'آنگویلا',
      AL: 'آلبانی',
      AM: 'ارمنستان',
      AO: 'آنگول',
      AQ: 'جنوبگان',
      AR: 'آرژانتین',
      AS: 'آمریکایی ساموآ',
      AT: 'اتریش',
      AU: 'استرالیا',
      AW: 'آروبا',
      AX: 'جزایر‌الند',
      AZ: 'آذربایجان',
      BA: 'بوسنی و هرزگوین',
      BB: 'باربادوس',
      BD: 'بنگلادش',
      BE: 'بلژیک',
      BF: 'بورکینافاسو',
      BG: 'بلغارستان',
      BH: 'بحرین',
      BI: 'بروندی',
      BJ: 'بنین',
      BL: 'سن بارتلمی',
      BM: 'برمودا',
      BN: 'برونئی دارالسالم',
      BO: 'بولیوی',
      BQ: 'سینت یوپستیشس',
      BR: 'برزیل',
      BS: 'باهاما',
      BT: 'بوتان',
      BV: 'جزیره بووه',
      BW: 'بوتسوانا',
      BY: 'بلاروس',
      BZ: 'بلیز',
      CA: 'کانادا',
      CC: 'جزایر کوکوس',
      CD: 'جمهوری دموکراتیک کنگ',
      CF: 'جمهوری افریقای مرکزی',
      CG: 'کنگو',
      CH: 'سوئیس',
      CI: "ساحل عاج",
      CK: 'جزایر کوک',
      CL: 'شیلی',
      CM: 'کامرون',
      CN: 'چین',
      CO: 'کلمبیا',
      CR: 'کاستاریکا',
      CU: 'کوبا',
      CV: 'کاپ ورد',
      CW: 'کوراسائو',
      CX: 'جزیره کریسمس',
      CY: 'قبرس',
      CZ: 'جمهوری چک',
      DE: 'آلمان',
      DJ: 'جیبوتی',
      DK: 'دانمارک',
      DM: 'دومینیکا',
      DO: 'جمهوری دومینیکن',
      DZ: 'الجزایر',
      EC: 'اکوادور',
      EE: 'استونی',
      EG: 'مصر',
      EH: 'صحرای غربی',
      ER: 'اریتره',
      ES: 'اسپانیا',
      ET: 'اتیوپی',
      FI: 'فنلاند',
      FJ: 'فیجی',
      FK: 'جزایر فالکلند',
      FM: 'میکرونزی',
      FO: 'جزایر فارو',
      FR: 'فرانسه',
      GA: 'گابن',
      GB: 'بریتانیا',
      GD: 'گرانادا',
      GE: 'گرجستان',
      GF: 'گویان فرانسه',
      GG: 'گرنزی',
      GH: 'غنا',
      GI: 'جبل الطارق',
      GL: 'گرینلند',
      GM: 'گامبیا',
      GN: 'گینه',
      GP: 'گوادلوپ',
      GQ: 'گینه استوایی',
      GR: 'یونان',
      GS: 'گرجستان جنوبی',
      GT: 'گواتمالا',
      GU: 'گوام',
      GW: 'گینه بیسائو',
      GY: 'گویان',
      HK: 'هنگ کنگ',
      HM: 'جزیره هرد و جزایر مک دونالد',
      HN: 'هندوراس',
      HR: 'کرواسی',
      HT: 'هائیتی',
      HU: 'مجارستان',
      ID: 'اندونزی',
      IE: 'ایرلند',
      IL: 'اسرائیل',
      IM: 'جزیره انسان',
      IN: 'هند',
      IO: 'قلمرو بریتانیا در اقیانوس هند',
      IQ: 'عراق',
      IR: 'ایران',
      IS: 'ایسلند',
      IT: 'ایتالیا',
      JE: 'نیوجرسی',
      JM: 'جامائیکا',
      JO: 'اردن',
      JP: 'ژاپن',
      KE: 'کنیا',
      KG: 'قرقیزستان',
      KH: 'کامبوج',
      KI: 'کیریباتی',
      KM: 'کومور',
      KN: 'سنت کیتس و نویس',
      KP: "کره شمالی",
      KR: 'کره جنوبی',
      KW: 'کویت',
      KY: 'جزایر کیمن',
      KZ: 'قزاقستان',
      LA: "لائوس",
      LB: 'لبنان',
      LC: 'سنت لوسیا',
      LI: 'لیختن اشتاین',
      LK: 'سریلانکا',
      LR: 'لیبریا',
      LS: 'لسوتو',
      LT: 'لیتوانی',
      LU: 'لوکزامبورگ',
      LV: 'لتونی',
      LY: 'لیبی',
      MA: 'مراکش',
      MC: 'موناکو',
      MD: 'مولدووا',
      ME: 'مونته نگرو',
      MF: 'سنت مارتین',
      MG: 'ماداگاسکار',
      MH: 'جزایر مارشال',
      MK: 'مقدونیه',
      ML: 'مالی',
      MM: 'میانمار',
      MN: 'مغولستان',
      MO: 'ماکائو',
      MP: 'جزایر ماریانای شمالی',
      MQ: 'مارتینیک',
      MR: 'موریتانی',
      MS: 'مونتسرات',
      MT: 'مالتا',
      MU: 'موریس',
      MV: 'مالدیو',
      MW: 'مالاوی',
      MX: 'مکزیک',
      MY: 'مالزی',
      MZ: 'موزامبیک',
      NA: 'نامیبیا',
      NC: 'کالدونیای جدید',
      NE: 'نیجر',
      NF: 'جزیره نورفولک',
      NG: 'نیجریه',
      NI: 'نیکاراگوئ',
      NL: 'هلند',
      NO: 'نروژ',
      NP: 'نپال',
      NR: 'نائورو',
      NU: 'نیوئه',
      NZ: 'نیوزیلند',
      OM: 'عمان',
      PA: 'پاناما',
      PE: 'پرو',
      PF: 'پلینزی فرانسه',
      PG: 'پاپوآ گینه نو',
      PH: 'فیلیپین',
      PK: 'پاکستان',
      PL: 'لهستان',
      PM: 'سنت پیر و میکلون',
      PN: 'پیتکیرن',
      PR: 'پورتوریکو',
      PS: 'فلسطین',
      PT: 'پرتغال',
      PW: 'پالاو',
      PY: 'پاراگوئه',
      QA: 'قطر',
      RE: 'رئونیون',
      RO: 'رومانی',
      RS: 'صربستان',
      RU: 'روسیه',
      RW: 'رواندا',
      SA: 'عربستان سعودی',
      SB: 'جزایر سلیمان',
      SC: 'سیشل',
      SD: 'سودان',
      SE: 'سوئد',
      SG: 'سنگاپور',
      SH: 'سنت هلن',
      SI: 'اسلوونی',
      SJ: 'اسوالبارد و جان ماین',
      SK: 'اسلواکی',
      SL: 'سیرالئون',
      SM: 'سان مارینو',
      SN: 'سنگال',
      SO: 'سومالی',
      SR: 'سورینام',
      SS: 'سودان جنوبی',
      ST: 'سائوتومه و پرینسیپ',
      SV: 'السالوادور',
      SX: 'سنت مارتن',
      SY: 'جمهوری عربی سوریه',
      SZ: 'سوازیلند',
      TC: 'جزایر ترکس و کیاکوس',
      TD: 'چاد',
      TF: 'مناطق جنوبی فرانسوی',
      TG: 'توگو',
      TH: 'تایلند',
      TJ: 'تاجیکستان',
      TK: 'توکلائو',
      TL: 'تیمورلسته',
      TM: 'ترکمنستان',
      TN: 'تونس',
      TO: 'تونگا',
      TR: 'ترکیه',
      TT: 'ترینیداد و توباگو',
      TV: 'تووالو',
      TW: 'تایوان',
      TZ: 'تانزانیا',
      UA: 'اوکراین',
      UG: 'اوگاندا',
      UM: 'ایالات متحده صغیر جزایر دورافتادهی',
      US: 'ایالات متحده آمریکا',
      UY: 'اروگوئه',
      UZ: 'ازبکستان',
      VA: 'واتیکان',
      VC: 'سنت وینسنت و گرنادین',
      VE: 'ونزوئلا',
      VG: 'بریتانیا جزایر ویرجین',
      VI: 'ایالت متحده جزایر ویرجین',
      VN: 'ویتنام',
      VU: 'وانوواتو',
      WF: 'والیس و فوتونا',
      WS: 'ساموای',
      YE: 'یمن',
      YT: 'مایوت',
      ZA: 'آفریقای جنوبی',
      ZM: 'زامبیا',
      ZW: 'زیمبابوه'
    },
    ar: {
      HELP_TRANSLATE: 'مساعدة لترجمة'
    },
    en: {
      HELP_TRANSLATE: 'Help translate',
      LANTERN: 'Lantern',
      LANGUAGE: 'Language',
      URL: 'URL',
      SHA1: 'SHA-1',
      WAITING_FOR_LANTERN: 'Waiting for Lantern...',
      UNEXPECTED_STATE_TITLE: 'Unexpected State',
      UNEXPECTED_STATE_PROMPT: 'Lantern is in an unexpected state. Try refreshing, and if the problem persists, try quitting and restarting.  You could also try reinstalling Lantern. As a last resort, choosing Reset will reset Lantern to its original state. Reporting any additional information about the problem to the Lantern developers can speed its resolution.',
      RESET: 'Reset',
      REFRESH: 'Refresh',
      SETTINGS_UNLOCK_TITLE: 'Unlock Settings',
      SETTINGS_UNLOCK_PROMPT: 'Enter your Lantern password to unlock your settings.',
      PASSWORD: 'password',
      PASSWORD_CONFIRM: 'confirm password',
      CREATE: 'Create',
      CREATED: 'Created',
      PASSWORDS_MUST_MATCH: 'Passwords must match',
      PASSWORD_INVALID: 'Password invalid',
      UNLOCK: 'Unlock',
      UNLOCKED: 'Unlocked',
      SETTINGS_LOAD_FAILURE_TITLE: 'Couldn’t Load Settings',
      SETTINGS_LOAD_FAILURE_PROMPT: 'Your settings could not be loaded. Try again, and if the problem persists, try quitting and restarting. As a last resort, choosing Reset will reset Lantern to its original state. Reporting any additional information about the problem to the Lantern developers can speed its resolution.',
      NOTIFY_LANTERN_DEVS: 'Notify Lantern developers',
      UNEXPECTED_ERROR: 'An unexpected error has occurred.',
      ERROR: 'An error has occurred.',
      QUIT: 'Quit',
      RETRY: 'Retry',
      PASSWORD_CREATE_TITLE: 'Create Password',
      PASSWORD_CREATE_PROMPT: 'Create your Lantern password so your information can be stored securely.',
      BETA: 'BETA',
      TAG_LINE: 'Internet freedom for everyone.',
      GIVE_ACCESS: 'Give Access',
      GET_ACCESS: 'Get Access',
      INTERNET_REQUIRED: 'Please connect to the internet to proceed.',
      NO_PROXIES: 'Can’t reach any Lantern users through your social network who are giving access. You will be able to get <br>access once you can reach some. Leave Lantern running to continue trying to reach some Give Access users.',
      CONNECTION_OFFLINE: 'Your internet connection appears to be offline.',
      AUTHORIZE_TITLE: 'Sign in through Google',
      AUTHORIZE_PROMPT: 'Lantern allows you to sign in through your Google account.',
      AUTHORIZE_TIP_GTALK: 'Lantern works best with a large network of users who trust one another to share internet connections. Signing in through Google allows you to connect to users in your social network, and not just anyone.',
      AUTHORIZE_EXTERNAL: 'Click to be taken to google.com',
      HELP: 'Help',
      WHY: 'Why?',
      AUTHORIZE_LANTERN: 'Sign In',
      EMAIL_PLACEHOLDER: 'email@example.com',
      CANCEL: 'Cancel',
      CONTINUE: 'Continue',
      UPDATE: 'Update',
      WAITING: 'Waiting...',
      UPDATING: 'Updating...',
      CONFIGURING: 'Configuring...',
      CONNECTING: 'Connecting...',
      CONNECTED: 'Connected',
      CONNECTING_TITLE: 'Connecting...',
      NOT_INVITED_TITLE: 'User Not Invited',
      NOT_INVITED_PROMPT: 'The user you tried has not been invited to join Lantern yet.',
      TRY_ANOTHER_USER: 'Try another user',
      REQUEST_INVITE: 'Request invite',
      REQUEST_INVITE_TITLE: 'Request Invite',
      REQUEST_INVITE_PROMPT: 'Request an invitation from:',
      SOMEONE_I_KNOW_LABEL: 'Someone I know using Lantern',
      SOMEONE_I_KNOW_INFO: 'If your contact is a recognized user, he or she will receive a message immediately with the content of your request.',
      LANTERN_DEVS_LABEL: 'The Lantern developers',
      LANTERN_DEVS_INFO: 'New users will be invited as fast as the network can accommodate them.',
      SEND_REQUEST: 'Send request',
      SENDING_REQUEST: 'Sending request...',
      REQUEST_SENT_TITLE: 'Request Sent',
      REQUEST_SENT_PROMPT: 'Your request has been sent. You will receive an email when you have been invited. You can continue to use Lantern in demonstration mode in the meantime.', // XXX can't send email if we only store hashes of emails
      FIRST_INVITE_RECEIVED_TITLE: 'Invitation Received!',
      FIRST_INVITE_RECEIVED_INTRO: 'You have received an invitation to join Lantern!',
      FIRST_INVITE_RECEIVED_SENDER: 'The sender of this invitation was:',
      FIRST_INVITE_RECEIVED_PROMPT: 'You will now be able to complete Lantern setup.',
      AUTHORIZE_LATER_TITLE: 'Authorize Later',
      AUTHORIZE_LATER_PROMPT: 'Lantern will keep trying to reach Google and prompt you to authorize again when it becomes available. You can continue to use Lantern in demonstration mode in the meantime.',
      PROXIED_SITES_TITLE: 'Proxied Sites',
      CONFIGURE_PROXIED_SITES: 'Enter the sites you’d like to access through Lantern:',
      PROXIED_SITES_PROMPT: 'By default, only sites on this list will be accessed (“proxied”) through your Lantern network. Only proxying sites that need it makes Lantern faster and harder to block.',
      SEARCH: 'Search',
      NO_MATCHING_SITES: 'No matching sites',
      PROXYING_ALL_WARNING: 'Lantern is currently set to proxy all traffic.',
      DISABLE_PROXY_ALL: 'Disable proxy all traffic',
      PROXIED_SITES_TIP: 'Content on other sites included in pages on these sites will also be proxied automatically.',
      ERROR_ONE_REQUIRED: 'At least one site is required.',
      ERROR_INVALID_LINE: 'Invalid line:',
      ERROR_MAX_PROXIED_SITES_EXCEEDED: 'Maximum number of proxied sites exceeded',
      ERROR_SETTING_PROXIED_SITES: 'Error setting proxied sites.',
      ERROR_OPERATION_FAILED: 'Operation failed.',
      SYSTEM_PROXY_TITLE: 'System Proxy',
      SYSTEM_PROXY_PROMPT: 'By default, Lantern sets itself as your system proxy so your browser will use it automatically.',
      SYSTEM_PROXY_TRUE: 'Set Lantern as my system proxy (recommended)',
      AUTO_PROXY: 'Lantern will manage your system proxy settings automatically.',
      SYSTEM_PROXY_FALSE: 'I will manually configure my browser to use Lantern.',
      PAC_FILE_LOC: 'Lantern PAC file url:',
      SYSTEM_PROXY_ERROR: 'Proxy configuration failed',
      FINISHED_TITLE: 'Finished!',
      FINISHED_PROMPT_GIVE: 'Your connection is now ready to be shared through your Lantern social network.',
      FINISHED_PROMPT_GET: 'You will now be able to access your proxied sites through your Lantern social network.',
      AUTOREPORT_PROMPT: 'Securely report anonymous usage statistics to contribute to Lantern',
      FINISH: 'Finish',
      LANTERN_FRIENDS: 'Lantern Friends',
      LANTERN_FRIENDS_INTRO: 'Lantern relies on a large network of users who trust one another to share internet connections. Enter the people you trust below, and you will be connected to other users through the resulting social network.',
      LANTERN_FRIENDS_COLON: 'Lantern friends:',
      PROXYING_ALL_TRAFFIC: 'Proxying all traffic',
      NO_NAME: '(name unavailable)',
      NO_EMAIL: '(email unavailable)',
      NO_FRIENDS: 'You currently have no Lantern friends.',
      RETRIEVING_NINVITES: 'Retrieving number of invites...',
      ADD_FRIENDS_PROMPT: 'Add friends by Gmail or Google Apps address',
      SEARCHING_ELLIPSIS: 'Searching...',
      ENTER_VALID_EMAIL: 'Enter a valid email address',
      NFRIENDS: {1: '1 Lantern friend', other: '{} Lantern friends'},
      NSUGGESTED: {1: '1 friend suggestion:', other: '{} friend suggestions:'},
      SUGGESTED_FRIEND_WARNING: 'Only friend people you trust to share an internet connection.',
      FRIEND: 'Friend',
      DECLINE: 'Decline',
      SETTINGS: 'Settings',
      MODE: 'Mode',
      PROXY: 'Proxy',
      MANAGE_PROXIED_SITES: 'Manage proxied sites...',
      ADVANCED: 'Advanced',
      PROXY_ALL_TRAFFIC: 'Proxy all traffic',
      APP: 'App',
      SAVE_GTALK_PASSWORD: 'Securely save Google Talk password',
      AUTO_START: 'Run Lantern automatically on system start',
      SHOW_FRIEND_PROMPTS: 'Prompt to friend contacts running Lantern',
      SET_AS_SYSTEM_PROXY: 'Set as system proxy',
      NO_AUTOREPORT_WARNING: 'Your usage will not contribute to global totals.',
      ENABLE_AUTOREPORT_SUGGESTION: 'Enable automatic reporting in Settings to have your usage contribute to global totals',
      RESET_ELLIPSIS: 'Reset...',
      CLOSE: 'Close',
      BACK: 'Back',
      ABOUT: 'About',
      ABOUT_TITLE: 'About Lantern',
      UPDATE_AVAILABLE_TITLE: 'Update Available',
      UPDATE_AVAILABLE_PROMPT: 'A new version of Lantern is available!',
      VERSION: 'version',
      RELEASED: 'released',
      MORE_INFO: 'more info',
      UPDATE_AVAILABLE_PROMPT_RUNNING: 'You are currently running',
      UPDATE_PROMPT: 'Please update now to ensure you have the latest features and improvements.',
      DOWNLOAD: 'Download',
      CONTACT: 'Contact',
      CONTACT_TITLE: 'Contact Lantern Developers',
      MESSAGE_PLACEHOLDER: '\n\n\n\n\n--\nDiagnostic information:\n',
      ERROR_TOO_LONG: {1: '1 character too long', other: '{} characters too long'},
      SEND: 'Send',
      GIVE_MODE_FORBIDDEN_TITLE: 'Give Access Mode Forbidden',
      GIVE_MODE_FORBIDDEN_PROMPT: 'Your internet connection appears to be coming from a censoring country. Giving access through this connection could be undesirable for other users. You can run Lantern in Give Access mode if you connect to the internet from outside a censoring country.', // XXX say which country and source identifying it as censoring
      CONTINUE_IN_GET_MODE: 'Continue in Get Access Mode',
      CONFIRM_RESET_TITLE: 'Confirm Reset',
      CONFIRM_RESET_PROMPT: 'Resetting Lantern will clear all saved information since it was set up.',
      BUG_REPORT_PROMPT: 'Additional information',
      NPEERS_ONLINE_GET: {1: '1 Get Mode user online', other: '{} Get Mode users online'},
      NPEERS_ONLINE_GIVE: {1: '1 Give Mode user online', other: '{} Give Mode users online'},
      NUSERS_ONLINE: {1: '1 user online', other: '{} users online'},
      NUSERS_EVER: {1: '1 user ever', other: '{} users ever'},
      LAST_CONNECTED: 'Last connected:',
      PCGIVE: 'Give Mode Lantern PC',
      PCGET: 'Get Mode Lantern PC',
      PCUNKNOWN: 'Lantern PC (awaiting connection)',
      CLOUDGIVE: 'Lantern Cloud Proxy',
      LAEPROXYGIVE: 'Lantern App Engine Proxy',
      UP: 'up',
      DN: 'down',
      TRANSFERRING_NOW: 'transferring now',
      TRANSFERRED_EVER: 'transferred ever',
      SENT: 'sent',
      RECEIVED: 'received',
      TRANSFERRED_GLOBALLY: 'transferred globally',
      P: 'petabyte',
      T: 'terabyte',
      G: 'gigabyte',
      M: 'megabyte',
      K: 'kilobyte',
      B: 'byte',
      AD: 'Andorra',
      AE: 'United Arab Emirates',
      AF: 'Afghanistan',
      AG: 'Antigua and Barbuda',
      AI: 'Anguilla',
      AL: 'Albania',
      AM: 'Armenia',
      AO: 'Angola',
      AQ: 'Antarctica',
      AR: 'Argentina',
      AS: 'American Samoa',
      AT: 'Austria',
      AU: 'Australia',
      AW: 'Aruba',
      AX: '\xc5land Islands',
      AZ: 'Azerbaijan',
      BA: 'Bosnia and Herzegovina',
      BB: 'Barbados',
      BD: 'Bangladesh',
      BE: 'Belgium',
      BF: 'Burkina Faso',
      BG: 'Bulgaria',
      BH: 'Bahrain',
      BI: 'Burundi',
      BJ: 'Benin',
      BL: 'Saint Barth\xe9lemy',
      BM: 'Bermuda',
      BN: 'Brunei Darussalam',
      BO: 'Bolivia',
      BQ: 'Bonaire, Sint Eustatius and Saba',
      BR: 'Brazil',
      BS: 'Bahamas',
      BT: 'Bhutan',
      BV: 'Bouvet Island',
      BW: 'Botswana',
      BY: 'Belarus',
      BZ: 'Belize',
      CA: 'Canada',
      CC: 'Cocos (Keeling) Islands',
      CD: 'Democratic Republic of the Congo',
      CF: 'Central African Republic',
      CG: 'Congo',
      CH: 'Switzerland',
      CI: "C\xf4te d'Ivoire",
      CK: 'Cook Islands',
      CL: 'Chile',
      CM: 'Cameroon',
      CN: 'China',
      CO: 'Colombia',
      CR: 'Costa Rica',
      CU: 'Cuba',
      CV: 'Cape Verde',
      CW: 'Cura\xe7ao',
      CX: 'Christmas Island',
      CY: 'Cyprus',
      CZ: 'Czech Republic',
      DE: 'Germany',
      DJ: 'Djibouti',
      DK: 'Denmark',
      DM: 'Dominica',
      DO: 'Dominican Republic',
      DZ: 'Algeria',
      EC: 'Ecuador',
      EE: 'Estonia',
      EG: 'Egypt',
      EH: 'Western Sahara',
      ER: 'Eritrea',
      ES: 'Spain',
      ET: 'Ethiopia',
      FI: 'Finland',
      FJ: 'Fiji',
      FK: 'Falkland Islands',
      FM: 'Micronesia',
      FO: 'Faroe Islands',
      FR: 'France',
      GA: 'Gabon',
      GB: 'United Kingdom',
      GD: 'Grenada',
      GE: 'Georgia',
      GF: 'French Guiana',
      GG: 'Guernsey',
      GH: 'Ghana',
      GI: 'Gibraltar',
      GL: 'Greenland',
      GM: 'Gambia',
      GN: 'Guinea',
      GP: 'Guadeloupe',
      GQ: 'Equatorial Guinea',
      GR: 'Greece',
      GS: 'South Georgia and the South Sandwich Islands',
      GT: 'Guatemala',
      GU: 'Guam',
      GW: 'Guinea-Bissau',
      GY: 'Guyana',
      HK: 'Hong Kong',
      HM: 'Heard Island and McDonald Islands',
      HN: 'Honduras',
      HR: 'Croatia',
      HT: 'Haiti',
      HU: 'Hungary',
      ID: 'Indonesia',
      IE: 'Ireland',
      IL: 'Israel',
      IM: 'Isle of Man',
      IN: 'India',
      IO: 'British Indian Ocean Territory',
      IQ: 'Iraq',
      IR: 'Iran',
      IS: 'Iceland',
      IT: 'Italy',
      JE: 'Jersey',
      JM: 'Jamaica',
      JO: 'Jordan',
      JP: 'Japan',
      KE: 'Kenya',
      KG: 'Kyrgyzstan',
      KH: 'Cambodia',
      KI: 'Kiribati',
      KM: 'Comoros',
      KN: 'Saint Kitts and Nevis',
      KP: "North Korea",
      KR: 'South Korea',
      KW: 'Kuwait',
      KY: 'Cayman Islands',
      KZ: 'Kazakhstan',
      LA: "Laos",
      LB: 'Lebanon',
      LC: 'Saint Lucia',
      LI: 'Liechtenstein',
      LK: 'Sri Lanka',
      LR: 'Liberia',
      LS: 'Lesotho',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      LV: 'Latvia',
      LY: 'Libya',
      MA: 'Morocco',
      MC: 'Monaco',
      MD: 'Moldova',
      ME: 'Montenegro',
      MF: 'Saint Martin',
      MG: 'Madagascar',
      MH: 'Marshall Islands',
      MK: 'Macedonia',
      ML: 'Mali',
      MM: 'Myanmar',
      MN: 'Mongolia',
      MO: 'Macao',
      MP: 'Northern Mariana Islands',
      MQ: 'Martinique',
      MR: 'Mauritania',
      MS: 'Montserrat',
      MT: 'Malta',
      MU: 'Mauritius',
      MV: 'Maldives',
      MW: 'Malawi',
      MX: 'Mexico',
      MY: 'Malaysia',
      MZ: 'Mozambique',
      NA: 'Namibia',
      NC: 'New Caledonia',
      NE: 'Niger',
      NF: 'Norfolk Island',
      NG: 'Nigeria',
      NI: 'Nicaragua',
      NL: 'Netherlands',
      NO: 'Norway',
      NP: 'Nepal',
      NR: 'Nauru',
      NU: 'Niue',
      NZ: 'New Zealand',
      OM: 'Oman',
      PA: 'Panama',
      PE: 'Peru',
      PF: 'French Polynesia',
      PG: 'Papua New Guinea',
      PH: 'Philippines',
      PK: 'Pakistan',
      PL: 'Poland',
      PM: 'Saint Pierre and Miquelon',
      PN: 'Pitcairn',
      PR: 'Puerto Rico',
      PS: 'Palestine',
      PT: 'Portugal',
      PW: 'Palau',
      PY: 'Paraguay',
      QA: 'Qatar',
      RE: 'R\xe9union',
      RO: 'Romania',
      RS: 'Serbia',
      RU: 'Russia',
      RW: 'Rwanda',
      SA: 'Saudi Arabia',
      SB: 'Solomon Islands',
      SC: 'Seychelles',
      SD: 'Sudan',
      SE: 'Sweden',
      SG: 'Singapore',
      SH: 'Saint Helena, Ascension and Tristan da Cunha',
      SI: 'Slovenia',
      SJ: 'Svalbard and Jan Mayen',
      SK: 'Slovakia',
      SL: 'Sierra Leone',
      SM: 'San Marino',
      SN: 'Senegal',
      SO: 'Somalia',
      SR: 'Suriname',
      SS: 'South Sudan',
      ST: 'São Tomé and Príncipe',
      SV: 'El Salvador',
      SX: 'Sint Maarten',
      SY: 'Syrian Arab Republic',
      SZ: 'Swaziland',
      TC: 'Turks and Caicos Islands',
      TD: 'Chad',
      TF: 'French Southern Territories',
      TG: 'Togo',
      TH: 'Thailand',
      TJ: 'Tajikistan',
      TK: 'Tokelau',
      TL: 'Timor-Leste',
      TM: 'Turkmenistan',
      TN: 'Tunisia',
      TO: 'Tonga',
      TR: 'Turkey',
      TT: 'Trinidad and Tobago',
      TV: 'Tuvalu',
      TW: 'Taiwan',
      TZ: 'Tanzania',
      UA: 'Ukraine',
      UG: 'Uganda',
      UM: 'United States Minor Outlying Islands',
      US: 'United States',
      UY: 'Uruguay',
      UZ: 'Uzbekistan',
      VA: 'Vatican City',
      VC: 'Saint Vincent and the Grenadines',
      VE: 'Venezuela',
      VG: 'British Virgin Islands',
      VI: 'U.S. Virgin Islands',
      VN: 'Vietnam',
      VU: 'Vanuatu',
      WF: 'Wallis and Futuna',
      WS: 'Samoa',
      YE: 'Yemen',
      YT: 'Mayotte',
      ZA: 'South Africa',
      ZM: 'Zambia',
      ZW: 'Zimbabwe'
    }
  })
  // https://groups.google.com/d/msg/angular/641c1ykOX4k/hcXI5HsSD5MJ
  .filter('i18n', function($filter, langSrvc, DEFAULT_LANG, TRANSLATIONS) {
    var COUNT = /{}/g,
        numFltr = $filter('number');
    function keyNotFound(key) {
      return '(translation key "'+key+'" not found)';
    }
    function pluralNotFound(key, count) {
      return '(plural not found for key "'+key+'" and count "'+count+'")';
    }
    return function(key, count) {
      if (_.isUndefined(key)) return '(translation key undefined. did you forget quotes?)';
      if (!key) return '';
      var translation =
          (TRANSLATIONS[langSrvc.lang()] || {})[key] ||
          TRANSLATIONS[DEFAULT_LANG][key];
      if (!translation) return keyNotFound(key);
      if (_.isPlainObject(translation)) {
        if (_.isUndefined(count)) return '';
        translation = translation[count] || translation.other;
        if (translation) return translation.replace(COUNT, numFltr(count));
        return pluralNotFound(key, count);
      }
      return translation;
    };
  });
