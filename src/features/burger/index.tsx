import { useParams } from 'react-router-dom';
import { BurgerImage } from '../../components/BurgerImage/BurgerImage/BurgerImage';
import { BurgerOptionsList } from './BurgerOptionsList/BurgerOptionsList';
import { BurgerOrderDetails } from './BurgerOrderDetails/BurgerOrderDetails';
import { Container } from 'react-bootstrap';

export function BurgerConstructor() {
    let { id } = useParams();
    if(!id) id = 'new';

	const containerMaxHeight = Math.max(
		Math.min(window.innerHeight - 320, 600),
		165
	);

    const containerMaxWidth = 190;

	return (
		<Container>
			<div className='burger__wrapper'>
				<div className='burger__order'>
					<BurgerOrderDetails orderId={id} />
					<div className='burger__visual'>
						<BurgerImage
							containerMaxHeight={containerMaxHeight}
							containerMaxWidth={containerMaxWidth}
							orderId={id}
						></BurgerImage>
					</div>
				</div>

				<BurgerOptionsList orderId={id} />
			</div>
		</Container>
	);
}
