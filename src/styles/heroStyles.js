import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#455a64',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  headerButton: { padding: 6, backgroundColor: '#607d8b', borderRadius: 6 },
  headerButtonText: { color: '#fff', fontWeight: 'bold' },

  searchBar: { margin: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    margin: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
    maxWidth: '250px',
  },
  image: { width: 70, height: 70, borderRadius: 10, margin: 8 },
  info: { flex: 1, justifyContent: 'center', marginLeft: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
  button: {
    marginTop: 8,
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  fav: { backgroundColor: '#ff5252' },
  notFav: { backgroundColor: '#2196f3' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});