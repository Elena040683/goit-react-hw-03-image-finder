import { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import fetchImages from './services/images-api';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      return fetchImages(this.state.searchValue, 1)
        .then(data => {
          this.setState({ images: data, page: 1 });
        })
        .catch(err => console.log(err));
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      return fetchImages(this.state.searchValue, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data],
          }));
        })

        .catch(err => console.log('Error:', err));
    }
  }

  getSearchValue = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar getSearchValue={this.getSearchValue} />
        <ImageGallery images={images} />
      </>
    );
  }
}

export default App;
