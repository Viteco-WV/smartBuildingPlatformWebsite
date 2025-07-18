import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  console.log('API called with query:', query);

  if (!query || query.length < 2) {
    console.log('Query too short, returning empty array');
    return NextResponse.json({ suggestions: [] });
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=nl&limit=20&addressdetails=1&extratags=1&namedetails=1&accept-language=nl`,
      {
        headers: {
          'User-Agent': 'Infinity-Website/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenStreetMap response:', data.length, 'results');
    
    // Filter en sorteer resultaten voor Nederlandse gebouwen
    const filteredSuggestions = data
      .filter((item: any) => {
        // Alleen resultaten uit Nederland
        if (item.address?.country !== 'Nederland' && item.address?.country !== 'Netherlands') {
          return false;
        }
        
        // Accepteer alle relevante types
        const type = item.type;
        const classType = item.class;
        
        // Breed scala aan relevante types
        const relevantTypes = [
          'house', 'building', 'street', 'postcode', 'city', 'suburb', 
          'neighbourhood', 'place', 'amenity', 'office', 'commercial'
        ];
        
        return relevantTypes.includes(type);
      })
      .map((item: any) => {
        // Maak een duidelijke weergave van het adres
        const address = item.address;
        let displayName = '';
        
        if (address?.house_number && address?.road) {
          // Volledig adres: straat + huisnummer + postcode + plaats
          displayName = `${address.road} ${address.house_number}`;
          if (address.postcode) {
            displayName += `, ${address.postcode}`;
          }
          if (address.city || address.town || address.village) {
            displayName += ` ${address.city || address.town || address.village}`;
          }
        } else if (address?.road) {
          // Alleen straatnaam
          displayName = address.road;
          if (address.city || address.town || address.village) {
            displayName += `, ${address.city || address.town || address.village}`;
          }
        } else {
          // Fallback naar de originele display_name
          displayName = item.display_name;
        }
        
        return displayName;
      })
      .slice(0, 8); // Beperk tot 8 resultaten

    console.log('Final suggestions:', filteredSuggestions);
    return NextResponse.json({ suggestions: filteredSuggestions });
  } catch (error) {
    console.error('Error fetching address suggestions:', error);
    return NextResponse.json({ suggestions: [] }, { status: 500 });
  }
} 