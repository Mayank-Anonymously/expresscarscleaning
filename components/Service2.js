import React from 'react';

const Service2 = () => {
	return (
		<>
			<section
				style={{
					backgroundImage: `url("/resource/clean.jpg")`,
					backgroundBlendMode: 'multiply',
					backgroundColor: '#00000045',
					height: '130vh',
				}}>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='service-card'>
								<h2>Teflon Coating</h2>
								<div className='price-list'>
									<div className='car-category'>
										<p>Hatchback</p>
										<p>Sedan</p>
										<p>Compact-SUV</p>
										<p>Full Size-SUV</p>
										<p>Luxury</p>
									</div>
									<div className='car-price'>
										<p>2999/-</p>
										<p>3499/-</p>
										<p>4499/-</p>
										<p>5499/-</p>
										<p>6499/-</p>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='service-card'>
								<h2>Full Detailing</h2>
								<div className='price-list'>
									<div className='car-category'>
										<p>Hatchback</p>
										<p>Sedan</p>
										<p>Compact-SUV</p>
										<p>Full Size-SUV</p>
										<p>Luxury</p>
									</div>
									<div className='car-price'>
										<p>2999/-</p>
										<p>3499/-</p>
										<p>4499/-</p>
										<p>5499/-</p>
										<p>6499/-</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Service2;
