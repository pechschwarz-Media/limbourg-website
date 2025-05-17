export async function getAppointment() {
    const res = await fetch('https://praxis-dr-limbourg.portal.praxismanager.software/api/v1/resources', {
        headers: {
            Authorization: `Bearer ${process.env.API_APPOINTMENTS}`,
            Accept: 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`API-Request fehlgeschlagen: ${res.status}`);
    }

    return res.json();
}
