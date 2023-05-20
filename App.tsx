/**
 * @format
 */

// IMPORT LIBRARIES
import * as React from 'react';
import * as Native from 'react-native';
import Sound from 'react-native-sound';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT GAME ASSETS
import ChloeUI from './assets/ChloeUI';
const AppLogo = require('./assets/dog_2.png');
const AppPurpleBackground = require('./assets/purple_background.jpg');
const AppGreenBackground = require('./assets/green_background.png');
const AppPinkBackground = require('./assets/pink_background.png');
const AppBlueBackground = require('./assets/blue_background.png');
const Dog1 = require('./assets/dog_1.png');
const Dog2 = require('./assets/dog_2.png');
const Dog3 = require('./assets/dog_3.png');
const Dog4 = require('./assets/dog_4.png');
const Dog5 = require('./assets/dog_5.png');
const Dog6 = require('./assets/dog_6.png');
const questionSoundSource = require('./assets/sfx_question.mp3');
const correctSoundSource = require('./assets/sfx_correct.mp3');
const wrongSoundSource = require('./assets/sfx_wrong.mp3');
const deleteSoundSource = require('./assets/sfx_delete.mp3');
const keySoundSource = require('./assets/sfx_key.mp3');

function App(): JSX.Element {
  // GAME STATES
  const [questionCounter, setQuestionCounter] = React.useState(1); // Will go from 1 to 11. This has 10 possible values.
  const [scoreCounter, setScoreCounter] = React.useState(0); // Will go from 0 to 10. This has 10 possible values.
  const [gameOverText, setGameOverText] = React.useState(''); // Empty string, will be changed based on score.
  const [number1, setNumber1] = React.useState(1);
  const [number2, setNumber2] = React.useState(1);
  const [mathSymbol, setMathSymbol] = React.useState('+');
  const [userAnswer, setUserAnswer] = React.useState(0);
  const [correctAnswer, setCorrectAnswer] = React.useState(0);
  // AUDIO
  Sound.setCategory('Playback');
  var CorrectSFX = new Sound(correctSoundSource, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + CorrectSFX.getDuration() + 'number of channels: ' + CorrectSFX.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    CorrectSFX.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  var QuestionSFX = new Sound(questionSoundSource, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + CorrectSFX.getDuration() + 'number of channels: ' + CorrectSFX.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    QuestionSFX.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  var WrongSFX = new Sound(wrongSoundSource, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + CorrectSFX.getDuration() + 'number of channels: ' + CorrectSFX.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    WrongSFX.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  var DeleteSFX = new Sound(deleteSoundSource, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + CorrectSFX.getDuration() + 'number of channels: ' + CorrectSFX.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    DeleteSFX.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  var KeySFX = new Sound(keySoundSource, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + CorrectSFX.getDuration() + 'number of channels: ' + CorrectSFX.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    KeySFX.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  // GAME LOGIC
  const LoadLevel = (localLevelName:string, navigation:any) => {
    GenerateNewQuestion();
    setQuestionCounter(1);
    setScoreCounter(0);
    setUserAnswer(0);
    navigation.navigate(localLevelName);
  }
  const ValidateAnswer = () => {
    if (userAnswer === correctAnswer) {
      CorrectSFX.play();
      setScoreCounter(scoreCounter+1)
      setQuestionCounter(questionCounter+1)
      setUserAnswer(0);
      GenerateNewQuestion();
    } else {
      WrongSFX.play();
      setQuestionCounter(questionCounter+1)
      setUserAnswer(0);
      GenerateNewQuestion();
    }
  }
  const GenerateNewQuestion = () => {
    const GenerateAdditionQuestion = () => {
      const localNumber1:number = GenerateRandomNumber1to12Inclusive();
      const localNumber2:number = GenerateRandomNumber1to12Inclusive();
      const localCorrectAnswer:number = localNumber1+localNumber2;
      setNumber1(localNumber1);
      setNumber2(localNumber2);
      setMathSymbol("+");
      setCorrectAnswer(localCorrectAnswer);
    }
  
    const GenerateMultiplicationQuestion = () => {
      const localNumber1:number = GenerateRandomNumber1to12Inclusive();
      const localNumber2:number = GenerateRandomNumber1to12Inclusive();
      const localCorrectAnswer:number = localNumber1*localNumber2;
      setNumber1(localNumber1);
      setNumber2(localNumber2);
      setMathSymbol("x");
      setCorrectAnswer(localCorrectAnswer);
    }
  
    const GenerateSubtractionQuestion = () => {
      const localNumber1:number = GenerateRandomNumber7to12Inclusive();
      const localNumber2:number = GenerateRandomNumber1to6Inclusive();
      const localCorrectAnswer:number = localNumber1-localNumber2;
      setNumber1(localNumber1);
      setNumber2(localNumber2);
      setMathSymbol("-");
      setCorrectAnswer(localCorrectAnswer);
    }
  
    const GenerateDivisionQuestion = () => {
      let localNumber1Options = [2,4,6,8,10,12];
      let localNumber1 = localNumber1Options[Math.floor(Math.random() * 5)];
      let localNumber2 = localNumber1/2;
      const localCorrectAnswer:number = localNumber1/localNumber2;
      setNumber1(localNumber1);
      setNumber2(localNumber2);
      setMathSymbol("÷");
      setCorrectAnswer(localCorrectAnswer);
    }
    const GenerateRandomNumber1to4Inclusive = () => {
      const randomNumber = Math.random();
      const scaledNumber = randomNumber * 4;
      const finalNumber = Math.floor(scaledNumber) + 1;
      return finalNumber;
    }
  
    const GenerateRandomNumber1to12Inclusive = () => {
      const randomNumber = Math.random();
      const scaledNumber = randomNumber * 12;
      const finalNumber = Math.floor(scaledNumber) + 1;
      return finalNumber;
    }
    
    const GenerateRandomNumber7to12Inclusive = () => {
      const randomNumber = Math.random();
      const scaledNumber = randomNumber * 6;
      const finalNumber = Math.floor(scaledNumber) + 7;
      return finalNumber;
    }
  
    const GenerateRandomNumber1to6Inclusive = () => {
      const randomNumber = Math.random();
      const scaledNumber = randomNumber * 6;
      const finalNumber = Math.floor(scaledNumber) + 1;
      return finalNumber;
    }
    switch (GenerateRandomNumber1to4Inclusive()) {
      case 1: /* Addition */ GenerateAdditionQuestion(); break;
      case 2: /* Multiplication */ GenerateMultiplicationQuestion(); break;
      case 3: /* Subtraction */ GenerateSubtractionQuestion(); break;
      case 4: /* Division */ GenerateDivisionQuestion(); break;
      default: break;
    }
  }
  // NUMPAD LOGIC
  const ProcessKeyPress = (localKeyValue:string) => {
    switch (localKeyValue) {
      case 'DELETE': setUserAnswer(Number(String(userAnswer).slice(0,-1))); DeleteSFX.play(); break;
      case 'ENTER': ValidateAnswer(); break;
      case '0': KeySFX.play(); if(String(userAnswer) === '0'){break;} else if (String(userAnswer).length >= 4){return;} else {setUserAnswer(Number(String(userAnswer)+localKeyValue))}; break;
      default: KeySFX.play(); if (String(userAnswer).length >= 4){return;}; setUserAnswer(Number(String(userAnswer)+localKeyValue)); break;
    }
  }
  // SCREENS
  function HomeScreen({navigation}:any) {
    return (
      <Native.View style={ChloeUI.Container}>
        <Native.ImageBackground source={AppPurpleBackground} style={ChloeUI.BackgroundImage}>
          <Native.View style={ChloeUI.TopView}>
            <Native.View style={ChloeUI.MiddleView}>
              <Native.Text style={ChloeUI.WhiteHeading}>Math Paws</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.MiddleView}>
            <Native.View style={ChloeUI.TopView}>
              <Native.TouchableOpacity style={ChloeUI.MenuButton} onPress={()=>navigation.navigate('Submenu')}><Native.Text style={ChloeUI.MenuButtonText}>Play</Native.Text></Native.TouchableOpacity>
              <Native.TouchableOpacity style={ChloeUI.MenuButton} onPress={()=>{navigation.navigate('About');QuestionSFX.play()}}><Native.Text style={ChloeUI.MenuButtonText}>About</Native.Text></Native.TouchableOpacity>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.BottomView}>
            <Native.View style={ChloeUI.TopView}>
              <Native.Image source={AppLogo}/>
            </Native.View>
          </Native.View>
        </Native.ImageBackground>
      </Native.View>
    );
  }
  function SubmenuScreen ({navigation}:any) {
    return (
      <Native.View style={ChloeUI.Container}>
        <Native.ImageBackground source={AppPurpleBackground} style={ChloeUI.BackgroundImage}>
          <Native.View style={ChloeUI.TopView}>
            <Native.View style={ChloeUI.MiddleView}>
              <Native.Text style={ChloeUI.WhiteHeading}>Select Level</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.MiddleView}>
            <Native.View style={ChloeUI.TopView}>
              <Native.TouchableOpacity style={ChloeUI.SubmenuButton} onPress={() => LoadLevel('Level 0', navigation)}><Native.Text style={ChloeUI.MenuButtonText}>Level 0</Native.Text></Native.TouchableOpacity>
              <Native.TouchableOpacity style={ChloeUI.SubmenuButton} onPress={() => LoadLevel('Level 1', navigation)}><Native.Text style={ChloeUI.MenuButtonText}>Level 1</Native.Text></Native.TouchableOpacity>
              <Native.TouchableOpacity style={ChloeUI.SubmenuButton} onPress={() => LoadLevel('Level 2', navigation)}><Native.Text style={ChloeUI.MenuButtonText}>Level 2</Native.Text></Native.TouchableOpacity>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.BottomView}>
            <Native.View style={ChloeUI.TopView}>
              <Native.Image style={ChloeUI.Doggy} source={Dog5}/>
            </Native.View>
          </Native.View>
        </Native.ImageBackground>
      </Native.View>
    );
  }
  function AboutScreen({navigation}:any) {
    return (
      <Native.View style={ChloeUI.Container}>
        <Native.ImageBackground source={AppPurpleBackground} style={ChloeUI.BackgroundImage}>
          <Native.View style={ChloeUI.TopView}>
            <Native.View style={ChloeUI.MiddleView}>
              <Native.Text style={ChloeUI.WhiteHeading}>How to play?</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.MiddleView}>
            <Native.View style={ChloeUI.TopView}>
              <Native.View style={ChloeUI.TutorialView}>
                <Native.Text style={ChloeUI.TextBlack}>To win the game, answer a series of Math questions correctly. The questions can be Addition, Subtraction, Multiplication or Division</Native.Text>
              </Native.View>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.BottomView}>
            <Native.View style={ChloeUI.MiddleView}>
              <Native.TouchableOpacity style={ChloeUI.GoBackButton} onPress={()=> navigation.navigate('Home')}>
                <Native.ImageBackground style={ChloeUI.GoBackImage} source={Dog4}></Native.ImageBackground>
              </Native.TouchableOpacity>
            </Native.View>
          </Native.View>
        </Native.ImageBackground>
      </Native.View>
    );
  }
  const Numpad = () => {
  return (
    <Native.View style={ChloeUI.NumpadView}>
      <Native.View style={ChloeUI.NumpadRowView}>
        <Native.View style={ChloeUI.NumpadCollumnView}>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('1')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>1</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('4')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>4</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('7')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>7</Native.Text></Native.TouchableOpacity>
        </Native.View>
        <Native.View style={ChloeUI.NumpadCollumnView}>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('2')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>2</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('5')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>5</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('8')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>8</Native.Text></Native.TouchableOpacity>
        </Native.View>
        <Native.View style={ChloeUI.NumpadCollumnView}>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('3')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>3</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('6')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>6</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('9')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>9</Native.Text></Native.TouchableOpacity>
        </Native.View>
        <Native.View style={ChloeUI.NumpadCollumnView}>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('ENTER')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>ENTER</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('DELETE')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>DELETE</Native.Text></Native.TouchableOpacity>
          <Native.TouchableOpacity onPress={() => ProcessKeyPress('0')} style={ChloeUI.NumpadKey}><Native.Text style={ChloeUI.NumpadKeyText}>0</Native.Text></Native.TouchableOpacity>
        </Native.View>
      </Native.View>
    </Native.View>
  )}
  function Level0Screen({navigation}:any) {
    // If player answered 10 questions, move to game over screen.
    React.useEffect(() => {
      if (questionCounter >= 11){
        navigation.navigate('Game Over');
        setQuestionCounter(1);
      }
    },[questionCounter])
    return (
      <Native.View style={ChloeUI.Container}>
        <Native.ImageBackground style={ChloeUI.BackgroundImage} source={AppBlueBackground}>
          <Native.View style={ChloeUI.TopView}>
              <Native.TouchableOpacity style={ChloeUI.GoBackButtonSmall} onPress={()=> navigation.navigate('Submenu')}>
                <Native.ImageBackground style={ChloeUI.GoBackImageSmall} source={Dog4}></Native.ImageBackground>
              </Native.TouchableOpacity>
              <Native.Text style={ChloeUI.WhiteHeading}>Level 0</Native.Text>
              <Native.Text style={ChloeUI.WhiteSubheading}>Question {questionCounter}/10</Native.Text>
          </Native.View>
          <Native.View style={ChloeUI.MiddleView}></Native.View>
            <Native.View style={ChloeUI.TextContainer}>
              <Native.Text style={ChloeUI.WhiteHeading}>{number1} {mathSymbol} {number2} = {userAnswer}</Native.Text>
            </Native.View>
          <Native.View style={ChloeUI.BottomView}>
            <Native.Text style={ChloeUI.ScoreCounterText}>You got {scoreCounter} right!</Native.Text>
          </Native.View>
          <Numpad/>
        </Native.ImageBackground>
      </Native.View>
    );
  }
  function Level1Screen({navigation}:any) {
    // TIMER LOGIC
    const [timer, setTimer] = React.useState(20);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [timer]);
    // when timer hits 0, run this code
    React.useEffect(() => {
      if (timer <= 0) {
        setTimer(20)
        setQuestionCounter(questionCounter+1);
        setUserAnswer(0);
        GenerateNewQuestion();
      }
    }, [timer]);
    // GAME OBJECTIVE LOGIC
    // If player answered 10 questions, move to game over screen.
    React.useEffect(() => {
      if (questionCounter >= 11){
        navigation.navigate('Game Over');
        setQuestionCounter(1);
      }
    },[questionCounter])
    return (
      <Native.View style={ChloeUI.Container}>
        <Native.ImageBackground style={ChloeUI.BackgroundImage} source={AppPinkBackground}>
          <Native.View style={ChloeUI.TopView}>
              <Native.TouchableOpacity style={ChloeUI.GoBackButtonSmall} onPress={()=> navigation.navigate('Submenu')}>
                <Native.ImageBackground style={ChloeUI.GoBackImageSmall} source={Dog4}></Native.ImageBackground>
              </Native.TouchableOpacity>
              <Native.Text style={ChloeUI.WhiteHeading}>Level 1</Native.Text>
              <Native.Text style={ChloeUI.WhiteSubheading}>Question {questionCounter}/10</Native.Text>
              <Native.Text style={ChloeUI.TextBlack}>Time left: {timer} seconds</Native.Text>
          </Native.View>
          <Native.View style={ChloeUI.MiddleView}></Native.View>
            <Native.View style={ChloeUI.TextContainer}>
              <Native.Text style={ChloeUI.WhiteHeading}>{number1} {mathSymbol} {number2} = {userAnswer}</Native.Text>
            </Native.View>
          <Native.View style={ChloeUI.BottomView}>
            <Native.Text style={ChloeUI.ScoreCounterText}>You got {scoreCounter} right!</Native.Text>
          </Native.View>
          <Numpad/>
        </Native.ImageBackground>
      </Native.View>
    );
  }
  function Level2Screen({navigation}:any) {
    // TIMER LOGIC
    const [timer, setTimer] = React.useState(10);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [timer]);
    // when timer hits 0, run this code
    React.useEffect(() => {
      if (timer <= 0) {
        setTimer(20)
        setQuestionCounter(questionCounter+1);
        setUserAnswer(0);
        GenerateNewQuestion();
      }
    }, [timer]);
    // GAME OBJECTIVE LOGIC
    // If player answered 10 questions, move to game over screen.
    React.useEffect(() => {
      if (questionCounter >= 11){
        navigation.navigate('Game Over');
        setQuestionCounter(1);
      }
    },[questionCounter])
    return (
      <Native.View style={ChloeUI.Container}>
        <Native.ImageBackground style={ChloeUI.BackgroundImage} source={AppGreenBackground}>
          <Native.View style={ChloeUI.TopView}>
              <Native.TouchableOpacity style={ChloeUI.GoBackButtonSmall} onPress={()=> navigation.navigate('Submenu')}>
                <Native.ImageBackground style={ChloeUI.GoBackImageSmall} source={Dog4}></Native.ImageBackground>
              </Native.TouchableOpacity>
              <Native.Text style={ChloeUI.WhiteHeading}>Level 2</Native.Text>
              <Native.Text style={ChloeUI.WhiteSubheading}>Question {questionCounter}/10</Native.Text>
              <Native.Text style={ChloeUI.TextBlack}>Time left: {timer} seconds</Native.Text>
          </Native.View>
          <Native.View style={ChloeUI.MiddleView}></Native.View>
            <Native.View style={ChloeUI.TextContainer}>
              <Native.Text style={ChloeUI.WhiteHeading}>{number1} {mathSymbol} {number2} = {userAnswer}</Native.Text>
            </Native.View>
          <Native.View style={ChloeUI.BottomView}>
            <Native.Text style={ChloeUI.ScoreCounterText}>You got {scoreCounter} right!</Native.Text>
          </Native.View>
          <Numpad/>
        </Native.ImageBackground>
      </Native.View>
    );
  }
  function GameOverScreen({navigation}:any) {
    const ClearUpLevel = () => {
      navigation.navigate('Submenu');
      setScoreCounter(0);
    }

    const DisplayDoggy = () => {
      let localDoggy = <Native.Image source={Dog1}/>
      if (scoreCounter <= 5){
        localDoggy = <Native.Image style={ChloeUI.Doggy} source={Dog3}/>
      } else {
        localDoggy = <Native.Image style={ChloeUI.Doggy} source={Dog6}/>
      }
      return localDoggy;
    }

    React.useEffect(()=>{
      if(scoreCounter <= 5){
        setGameOverText('You Lose!');
      } else {
        setGameOverText('You Win!')
      }
    },[gameOverText])

    return (
      <Native.View style={ChloeUI.Container}>
        <Native.ImageBackground source={AppPurpleBackground} style={ChloeUI.BackgroundImage}>
          <Native.View style={ChloeUI.TopView}>
            <Native.View style={ChloeUI.MiddleView}>
              <DisplayDoggy/>
              <Native.Text style={ChloeUI.WhiteHeading}>{gameOverText}</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.MiddleView}>
            <Native.View style={ChloeUI.MiddleView}>
                <Native.Text style={ChloeUI.GameOverText}>Out of 10 questions...</Native.Text>
                <Native.Text style={ChloeUI.GameOverText}>You got {scoreCounter} right!</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={ChloeUI.BottomView}>
            <Native.View style={ChloeUI.MiddleView}>
              <Native.TouchableOpacity style={ChloeUI.GoBackButton} onPress={() => ClearUpLevel()}>
                <Native.ImageBackground style={ChloeUI.GoBackImage} source={Dog4}></Native.ImageBackground>
              </Native.TouchableOpacity>
            </Native.View>
          </Native.View>
        </Native.ImageBackground>
      </Native.View>
    );
  }

  // NAVIGATION
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Submenu" component={SubmenuScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Level 0" component={Level0Screen}/>
        <Stack.Screen name="Level 1" component={Level1Screen}/>
        <Stack.Screen name="Level 2" component={Level2Screen}/>
        <Stack.Screen name="Game Over" component={GameOverScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
