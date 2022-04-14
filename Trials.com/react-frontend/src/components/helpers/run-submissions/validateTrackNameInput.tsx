export const checkTrackName = (value: any) => {
    if (value?.length <= 45 && value?.length >= 1) {
        return true;
    }
};
