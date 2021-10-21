import React, { Component } from 'react';
import fetchImages from './services/api';
import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: null,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      return fetchImages(this.state.searchValue, 1)
        .then(data => {
          this.setState({ images: data, page: 1 });
        })
        .catch(err => console.log('Error:', err));
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

  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openModal = imageURL => {
    this.setState({ largeImage: imageURL, showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, loading, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images && <ImageGallery images={images} onClick={this.openModal} />}
        {loading && <Loader />}
        {images && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal url={this.state.largeImage} onClose={this.onClose} />
        )}
      </>
    );
  }
}

export default App;
