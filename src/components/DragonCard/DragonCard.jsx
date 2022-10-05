import SimpleSlider from 'components/SlickCarousel/SlickCarousel';
import {
  DragonTitle,
  DragonDescription,
  SectionTitle,
  DragonLink,
  AdditionalParameters,
  AdditionalParameterText,
  AdditionalParameterName,
} from './DragonCard.styled';

export const DragonCard = ({ dragon }) => {
  console.log('dragon: ', dragon);
  return (
    <div>
      <DragonTitle>{dragon.name}</DragonTitle>
      <div>
        {dragon?.flickr_images && (
          <SimpleSlider images={dragon.flickr_images} />
        )}
      </div>
      <SectionTitle>Description</SectionTitle>
      <DragonDescription>{dragon?.description}</DragonDescription>
      <SectionTitle>Wikipedia</SectionTitle>
      <AdditionalParameters>
        <DragonLink href={dragon?.wikipedia}> {dragon?.wikipedia}</DragonLink>
      </AdditionalParameters>

      <SectionTitle>Additional parameters:</SectionTitle>
      <AdditionalParameters>
        <AdditionalParameterText>
          <AdditionalParameterName>Height: </AdditionalParameterName>
          {dragon?.height_w_trunk.meters} m
        </AdditionalParameterText>
        <AdditionalParameterText>
          <AdditionalParameterName>
            Launch Payload Mass:
          </AdditionalParameterName>
          {dragon?.launch_payload_mass.kg} kg
        </AdditionalParameterText>
        <AdditionalParameterText>
          <AdditionalParameterName>First flight: </AdditionalParameterName>
          {dragon?.first_flight.slice(0, 4)}
        </AdditionalParameterText>
      </AdditionalParameters>
    </div>
  );
};
