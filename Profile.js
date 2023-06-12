import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button,Image,StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

const Profile = () => {
  const { username, updateUsername } = useContext(AppContext);
  const { id, updateId } = useContext(AppContext);
  const { email, updateEmail } = useContext(AppContext);
  const { bio, updateBio } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState('');
  const [newBio, setNewBio] = useState('');
  const [newEmail, setNewEmail] = useState('');


  const handleUpdate = () => {
    updateUsername(newUsername);
    setNewUsername('');
    updateBio(newBio)
    setNewBio('');
    updateEmail(newEmail);
    setNewEmail('');
  };
  

  return (
    <View>
      <Image
        style={{
          width:100,
          height:100,
          borderRadius:100,
          marginLeft:95
        }}
        source={{
          url:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDFfNjAg%2FMDAxNjc3NjU3OTEyMTQ4.M8BuuFx5A692-SYA4rFelVEAise57qFdO45je7K8kuYg.vH_HxBiCaMFLgL7spvji4p8auAIT9WdNG3ZnPgRCnhsg.JPEG.dldbqls9932%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25283%2529.jpeg&type=a340'
          }}
      />
      <Button title="Change" />
      <Text style={{marginTop:20}}>name</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginVertical: 10, width:300 }}
        placeholder=""
        value={newUsername}
        onChangeText={setNewUsername}
      />
      <Text style={{marginTop:20}}>Email</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        placeholder=""
        value={newEmail}
        onChangeText={setNewEmail}
      />
      <Text style={{marginTop:20}}>Bio</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        placeholder=""
        value={newBio}
        onChangeText={setNewBio}
      />
      <Button title="Submit" onPress={handleUpdate} />
    </View>
  );
};

export default Profile;
