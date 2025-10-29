import SimpleSlider from './SimpleSlider';

const App = () => {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '90vw' }}>
        <SimpleSlider />
      </div>
    </main>
  );
};

export default App;
