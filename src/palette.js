const colors = {
    lightMode: {
        mainBg: "#53a4ef",
        mainBgHover: "#92c3f1",
        subBg: "#0a9f84",
        subBgHover: "#1cb498",
        normalBg: "#f0f0f0",
        normalBgHover: "#d3d3d3",
        contentBg: "#fff",
        contentBgHover: "#f0f0f0",
        mainText: "#000",
        subText: "#fff",
        contentText: "#000"
    },
    darkMode: {
        mainBg: "#111",
        mainBgHover: "#2c2c2c",
        subBg: "#53a4ef",
        subBgHover: "#92c3f1",
        normalBg: "#222",
        normalBgHover: "#333",
        contentBg: "#111",
        contentBgHover: "#2d2e30",
        mainText: "#53a4ef",
        subText: "#fff",
        contentText: "#fff"
    }
}
export default function identify(mode) {
    const root = document.documentElement;
    const islight = mode ? colors.lightMode : colors.darkMode
    root.style.setProperty('--mainBg', islight.mainBg)
    root.style.setProperty('--mainBgHover', islight.mainBgHover)
    root.style.setProperty('--subBg', islight.subBg)
    root.style.setProperty('--subBgHover', islight.subBgHover)
    root.style.setProperty('--normalBg', islight.normalBg)
    root.style.setProperty('--normalBgHover', islight.normalBgHover)
    root.style.setProperty('--contentBg', islight.contentBg)
    root.style.setProperty('--contentBgHover', islight.contentBgHover)
    root.style.setProperty('--mainText', islight.mainText)
    root.style.setProperty('--subText', islight.subText)
    root.style.setProperty('--contentText', islight.contentText)
}