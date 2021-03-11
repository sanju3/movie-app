import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import CustomDialog from '../CustomDialog';
import styles from './CustomCard.css';

const CustomCard = ({movie, history, deleteR}) => {
  const [dialogStatus, setDialogStatus] = useState(false);
  const [toDelete, setToDelete] = useState('');

  return (
    <View>
      {dialogStatus && (
        <CustomDialog
          title="Delete a review"
          description="Are you sure?"
          operations={[
            {
              method: deleteR,
              data: toDelete,
              label: 'Delete',
            },
          ]}
          visibility={() => setDialogStatus(!dialogStatus)}
          isVisible={dialogStatus}
        />
      )}
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>{movie.display_title}</Text>
          </View>
          <View style={styles.image}>
            <Image
              source={{uri: movie.multimedia.src}}
              style={styles.imageDim}
            />
          </View>
          <View style={styles.body}>
            <Text>{movie.headline}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() =>
                history.push({
                  pathname: '/details',
                  state: {movie},
                })
              }>
              <Text style={styles.text}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dangerButton}
              onPress={() => {
                setToDelete(movie.display_title);
                setDialogStatus(true);
              }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomCard;
