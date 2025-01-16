export function onReady() {
    try {
        window.Ardittristan.ColorSetting.tester;
    } catch {
        ui.notifications.notify(
            'Please ensure the module "lib - ColorSettings" is enabled.',
            'error',
            { permanent: true }
        );
    }

    new window.Ardittristan.ColorSetting("damage-progress", "HighHpColor",{
        name: "High HP Color",
        hint: "The color to tint tokens at high hp",
        label: "Select High HP Color",
        restricted: true,
        defaultColor: '#D4FC0A',
        scope: "world"
    });

    new window.Ardittristan.ColorSetting("damage-progress", "MidHpColor",{
        name: "Mid HP Color",
        hint: "The color to tint tokens at mid hp",
        label: "Select Mid HP Color",
        restricted: true,
        defaultColor: '#FCAB0A',
        scope: "world"
    });

    new window.Ardittristan.ColorSetting("damage-progress", "LowHpColor",{
        name: "Low HP Color",
        hint: "The color to tint tokens at low hp",
        label: "Select Low HP Color",
        restricted: true,
        defaultColor: '#FC320A',
        scope: "world"
    });

    console.log("damage-progress | Settings registered!");
}
