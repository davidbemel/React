import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Modal.css';
import Modal from './Modal.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      photo:'',
      isModalOpen: false,
		  isInnerModalOpen: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  term = "Estos son los términos y condiciones de la aplicación";

  closeModal() {
		this.setState({
			isModalOpen: false
    });
    document.body.className='normalPage'
	}


	openModal() {
		this.setState({
			isModalOpen: true
    });
    document.body.className='overlay'
	}

  map=''

  componentDidMount(){
    const googlePlaceAPILoad = setInterval(() => {
      if (window.google){
        this.google=window.google;
        clearInterval(googlePlaceAPILoad);
        console.log('Load Place API');
        const mapCenter = new this.google.maps.LatLng(4.624335,-74.064644);
        this.map = new this.google.maps.Map(document.getElementById('gmapContainer'), {
          center: mapCenter,
          zoom: 15
        });
      };
    },100);
  }

  manejoOnClick = (e) => {
    const request = {
      query: document.getElementById('origen').value ,
      fields: ['photos', 'formatted_address', 'name','place_id'],
    };
    const service = new this.google.maps.places.PlacesService(this.map);
    service.findPlaceFromQuery(request, this.findPlaceResult);
  }

  findPlaceResult = (results, status) => {
    console.log('PlaceServiceStatus: '+status);
    if (status ===  'OK') {
      results.map((place) => {
        console.log('Place name: '+place.name+ ' Place id: '+place.place_id
        +' Place address: '+place.formatted_address)
        const placePhoto = place.photos[0].getUrl({'maxWidth': 640, 'maxHeight': 480})
        this.setState({photo:placePhoto,
          direccion:place.formatted_address})
      })
    }
  }

  render() {
    return (
      <div className="App" >
        <div id='gmapContainer'></div>
        <div className='container border rounded p-3 mt-4' style={{width:'50%'}}>
          <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'>
              <label><strong>Indica el lugar</strong></label>
            </div>
            <div className='col-4'></div>
          </div>
          <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 py-2'><input id='origen' type='text'/></div>
            <div className='col-4'></div>
          </div>
          <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'>
              <div className='btn btn-primary ' onClick={this.manejoOnClick}>Buscar Lugar</div>
            </div>
            <div className='col-4'></div>
          </div>
          <div className='row py-2'>
            <div className='col-12 text-center'><img src={this.state.photo} width='100%'/></div>
          </div>
          <div className='row' >
            <div className='col-2'></div>
            <div className='col-8'>Dirección: {this.state.direccion}</div>
            <div className='col-2'></div>
          </div>
          <div className='row' >
            <div className='col-2'></div>
            <div className='col-8' id='term' onClick={this.openModal}>
              <a href='#'>Términos y Condiciones</a>
            </div>
            <Modal
              isModalOpen={this.state.isModalOpen}
              closeModal={this.closeModal}>
              <p><strong>{this.term}</strong></p>
            </Modal>
            <div className='col-2'></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
