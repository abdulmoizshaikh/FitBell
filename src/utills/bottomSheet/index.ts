export const openBottomSheetModal = (bottomSheetModalRef) => {
	bottomSheetModalRef.current?.present();
};

/**
 * Close BottomSheet
 */
export const closeBottomSheetModal = (bottomSheetModalRef) => {
	bottomSheetModalRef.current?.close();
};

export default { openBottomSheetModal, closeBottomSheetModal };
