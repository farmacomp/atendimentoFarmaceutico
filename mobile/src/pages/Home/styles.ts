import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: '#47B5B6',
    marginBottom: 10
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginVertical: 40,
    marginHorizontal: 40
  },

  logo: {
    flex: 1,
    height: 100,
    margin: 0
  },

  buttonsContainer: {
    margin: 10
  },

  horizontalButton: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#47B5B6',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  horizontalButtonText: {
    color: '#FFF',
    fontSize: 16,
  },

  footerContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  footerText: {
    maxWidth: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 10,
    color: '#47B5B6'
  },

  university: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  universityImage: {
    flex: 1,
    height: 40,
    marginLeft: 50
  },

  universityText: {
    paddingRight: 60,
    color: '#47B5B6'
  },

  contributors: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 10,
    color: '#47B5B6'
  }
});

export default styles;