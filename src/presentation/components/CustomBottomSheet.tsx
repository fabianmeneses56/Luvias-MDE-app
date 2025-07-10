import {StyleSheet} from 'react-native';
import React, {useMemo, RefObject} from 'react';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Button} from 'react-native-paper';

import {arrayLocations} from '../../config/utils/constanst';

const CustomBottomSheet = ({
  bottomSheetRef,
  onPressButton,
}: {
  bottomSheetRef: RefObject<BottomSheet | null>;
  onPressButton: (item: string) => void;
}) => {
  const snapPoints = useMemo(() => ['50%', '70%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      animateOnMount={false}
      index={-1}>
      <BottomSheetFlatList
        data={arrayLocations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Button
            style={styles.option}
            onPress={() => {
              onPressButton(item.name);
              bottomSheetRef?.current?.close();
            }}
            labelStyle={{fontWeight: '600'}}
            textColor="#228997">
            {item.name}
          </Button>
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontWeight: '800',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
});
