// // Google Analytics
// function googleAnalytics() {
//     if (localStorage.getItem("cookies-consent")) {
//         window.dataLayer = window.dataLayer || [];
//
//         function gtag() {
//             dataLayer.push(arguments);
//         }
//
//         gtag('js', new Date());
//         gtag('config', 'G-LG6FM8V1VQ');
//     }
// }
//
// // Hide cookie notification
// function hideCookieNotification() {
//     document.getElementById("cookies-consent").style.display = "none"
// }
//
// function showCookieNotification() {
//     document.getElementById("cookies-consent").style.display = "flex"
// }
//
// // Allow Google Analytics cookies
// function allowAnalyticsCookies() {
//     localStorage.setItem("cookies-consent", "true")
//     hideCookieNotification()
//     // googleAnalytics()
// }
//
// // Disallow Google Analytics cookies (only for session)
// function disallowAnalyticsCookies() {
//     hideCookieNotification()
//     sessionStorage.setItem("cookies-consent", "false")
// }
//
// showCookieNotification()
//
// // If Google Analytics cookies allowed, hide notification and call Google Analytics
// if (localStorage.getItem("cookies-consent")) {
//     hideCookieNotification()
//     googleAnalytics()
// }
//
// // If Google Analytics not allowed, hide cookie notification
// if (sessionStorage.getItem("cookies-consent")) {
//     hideCookieNotification()
// }
