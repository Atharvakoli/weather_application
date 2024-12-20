const Forecastday = () => {
  const weatherData = {
    forecast: {
      forecastday: [
        {
          date: "2024-12-20",
          date_epoch: 1734652800,
          day: {
            maxtemp_c: 26.4,
            maxtemp_f: 79.5,
            mintemp_c: 19.7,
            mintemp_f: 67.4,
            avgtemp_c: 22.7,
            avgtemp_f: 72.8,
            maxwind_mph: 10.1,
            maxwind_kph: 16.2,
            totalprecip_mm: 0,
            totalprecip_in: 0,
            totalsnow_cm: 0,
            avgvis_km: 10,
            avgvis_miles: 6,
            avghumidity: 57,
            daily_will_it_rain: 0,
            daily_chance_of_rain: 0,
            daily_will_it_snow: 0,
            daily_chance_of_snow: 0,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
            uv: 1.2,
          },
          astro: {
            sunrise: "07:08 AM",
            sunset: "06:05 PM",
            moonrise: "10:54 PM",
            moonset: "11:10 AM",
            moon_phase: "Waning Gibbous",
            moon_illumination: 77,
            is_moon_up: 1,
            is_sun_up: 0,
          },
          hour: [
            {
              time_epoch: 1734633000,
              time: "2024-12-20 00:00",
              temp_c: 21,
              temp_f: 69.8,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 2.9,
              wind_kph: 4.7,
              wind_degree: 43,
              wind_dir: "NE",
              pressure_mb: 1012,
              pressure_in: 29.87,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 68,
              cloud: 0,
              feelslike_c: 21,
              feelslike_f: 69.8,
              windchill_c: 21,
              windchill_f: 69.8,
              heatindex_c: 24.4,
              heatindex_f: 75.9,
              dewpoint_c: 15,
              dewpoint_f: 59,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 5.5,
              gust_kph: 8.9,
              uv: 0,
            },
            {
              time_epoch: 1734636600,
              time: "2024-12-20 01:00",
              temp_c: 20.8,
              temp_f: 69.4,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 3.1,
              wind_kph: 5,
              wind_degree: 31,
              wind_dir: "NNE",
              pressure_mb: 1011,
              pressure_in: 29.86,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 67,
              cloud: 0,
              feelslike_c: 20.8,
              feelslike_f: 69.4,
              windchill_c: 20.8,
              windchill_f: 69.4,
              heatindex_c: 20.8,
              heatindex_f: 69.4,
              dewpoint_c: 14.5,
              dewpoint_f: 58.1,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 6,
              gust_kph: 9.7,
              uv: 0,
            },
            {
              time_epoch: 1734640200,
              time: "2024-12-20 02:00",
              temp_c: 20.5,
              temp_f: 69,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 3.8,
              wind_kph: 6.1,
              wind_degree: 31,
              wind_dir: "NNE",
              pressure_mb: 1011,
              pressure_in: 29.85,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 67,
              cloud: 0,
              feelslike_c: 20.5,
              feelslike_f: 69,
              windchill_c: 20.5,
              windchill_f: 69,
              heatindex_c: 20.5,
              heatindex_f: 69,
              dewpoint_c: 14.1,
              dewpoint_f: 57.4,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 7.3,
              gust_kph: 11.7,
              uv: 0,
            },
            {
              time_epoch: 1734643800,
              time: "2024-12-20 03:00",
              temp_c: 20.3,
              temp_f: 68.5,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 3.4,
              wind_kph: 5.4,
              wind_degree: 40,
              wind_dir: "NE",
              pressure_mb: 1011,
              pressure_in: 29.85,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 66,
              cloud: 2,
              feelslike_c: 20.3,
              feelslike_f: 68.5,
              windchill_c: 20.3,
              windchill_f: 68.5,
              heatindex_c: 20.3,
              heatindex_f: 68.5,
              dewpoint_c: 13.6,
              dewpoint_f: 56.5,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 6.5,
              gust_kph: 10.4,
              uv: 0,
            },
            {
              time_epoch: 1734647400,
              time: "2024-12-20 04:00",
              temp_c: 20,
              temp_f: 68.1,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 3.4,
              wind_kph: 5.4,
              wind_degree: 38,
              wind_dir: "NE",
              pressure_mb: 1011,
              pressure_in: 29.84,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 65,
              cloud: 3,
              feelslike_c: 20.1,
              feelslike_f: 68.1,
              windchill_c: 20.1,
              windchill_f: 68.1,
              heatindex_c: 20.1,
              heatindex_f: 68.1,
              dewpoint_c: 13.2,
              dewpoint_f: 55.8,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 6.5,
              gust_kph: 10.5,
              uv: 0,
            },
            {
              time_epoch: 1734651000,
              time: "2024-12-20 05:00",
              temp_c: 19.8,
              temp_f: 67.7,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 3.1,
              wind_kph: 5,
              wind_degree: 44,
              wind_dir: "NE",
              pressure_mb: 1011,
              pressure_in: 29.85,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 64,
              cloud: 3,
              feelslike_c: 19.9,
              feelslike_f: 67.7,
              windchill_c: 19.9,
              windchill_f: 67.7,
              heatindex_c: 19.9,
              heatindex_f: 67.7,
              dewpoint_c: 12.8,
              dewpoint_f: 55.1,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 6.1,
              gust_kph: 9.9,
              uv: 0,
            },
            {
              time_epoch: 1734654600,
              time: "2024-12-20 06:00",
              temp_c: 19.7,
              temp_f: 67.4,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 3.6,
              wind_kph: 5.8,
              wind_degree: 41,
              wind_dir: "NE",
              pressure_mb: 1011,
              pressure_in: 29.87,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 63,
              cloud: 3,
              feelslike_c: 19.7,
              feelslike_f: 67.4,
              windchill_c: 19.7,
              windchill_f: 67.4,
              heatindex_c: 19.7,
              heatindex_f: 67.4,
              dewpoint_c: 12.5,
              dewpoint_f: 54.6,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 7,
              gust_kph: 11.3,
              uv: 0,
            },
            {
              time_epoch: 1734658200,
              time: "2024-12-20 07:00",
              temp_c: 19.8,
              temp_f: 67.6,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 3.8,
              wind_kph: 6.1,
              wind_degree: 48,
              wind_dir: "NE",
              pressure_mb: 1012,
              pressure_in: 29.89,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 62,
              cloud: 0,
              feelslike_c: 19.8,
              feelslike_f: 67.6,
              windchill_c: 19.8,
              windchill_f: 67.6,
              heatindex_c: 19.8,
              heatindex_f: 67.6,
              dewpoint_c: 12.3,
              dewpoint_f: 54.2,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 7.4,
              gust_kph: 11.8,
              uv: 0,
            },
            {
              time_epoch: 1734661800,
              time: "2024-12-20 08:00",
              temp_c: 21.5,
              temp_f: 70.6,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 3.4,
              wind_kph: 5.4,
              wind_degree: 36,
              wind_dir: "NE",
              pressure_mb: 1013,
              pressure_in: 29.91,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 55,
              cloud: 0,
              feelslike_c: 21.5,
              feelslike_f: 70.6,
              windchill_c: 21.5,
              windchill_f: 70.6,
              heatindex_c: 24.4,
              heatindex_f: 76,
              dewpoint_c: 12.2,
              dewpoint_f: 53.9,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 5.1,
              gust_kph: 8.3,
              uv: 0.6,
            },
            {
              time_epoch: 1734665400,
              time: "2024-12-20 09:00",
              temp_c: 23.3,
              temp_f: 73.9,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 3.4,
              wind_kph: 5.4,
              wind_degree: 63,
              wind_dir: "ENE",
              pressure_mb: 1013,
              pressure_in: 29.92,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 49,
              cloud: 0,
              feelslike_c: 24.8,
              feelslike_f: 76.6,
              windchill_c: 23.3,
              windchill_f: 73.9,
              heatindex_c: 24.8,
              heatindex_f: 76.6,
              dewpoint_c: 11.9,
              dewpoint_f: 53.5,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 4.3,
              gust_kph: 6.9,
              uv: 1.8,
            },
            {
              time_epoch: 1734669000,
              time: "2024-12-20 10:00",
              temp_c: 24.9,
              temp_f: 76.8,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 2.9,
              wind_kph: 4.7,
              wind_degree: 0,
              wind_dir: "N",
              pressure_mb: 1013,
              pressure_in: 29.92,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 44,
              cloud: 0,
              feelslike_c: 25.5,
              feelslike_f: 77.9,
              windchill_c: 24.9,
              windchill_f: 76.8,
              heatindex_c: 25.5,
              heatindex_f: 77.9,
              dewpoint_c: 11.7,
              dewpoint_f: 53,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 3.4,
              gust_kph: 5.5,
              uv: 3.5,
            },
            {
              time_epoch: 1734672600,
              time: "2024-12-20 11:00",
              temp_c: 25.8,
              temp_f: 78.4,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 6.3,
              wind_kph: 10.1,
              wind_degree: 322,
              wind_dir: "NW",
              pressure_mb: 1013,
              pressure_in: 29.9,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 43,
              cloud: 0,
              feelslike_c: 26.1,
              feelslike_f: 78.9,
              windchill_c: 25.8,
              windchill_f: 78.4,
              heatindex_c: 26.1,
              heatindex_f: 78.9,
              dewpoint_c: 12.2,
              dewpoint_f: 54,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 7.2,
              gust_kph: 11.6,
              uv: 5.1,
            },
            {
              time_epoch: 1734676200,
              time: "2024-12-20 12:00",
              temp_c: 26.2,
              temp_f: 79.1,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 9.6,
              wind_kph: 15.5,
              wind_degree: 320,
              wind_dir: "NW",
              pressure_mb: 1012,
              pressure_in: 29.87,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 45,
              cloud: 2,
              feelslike_c: 26.5,
              feelslike_f: 79.7,
              windchill_c: 26.2,
              windchill_f: 79.1,
              heatindex_c: 26.5,
              heatindex_f: 79.7,
              dewpoint_c: 13.4,
              dewpoint_f: 56.2,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 11.1,
              gust_kph: 17.8,
              uv: 5.7,
            },
            {
              time_epoch: 1734679800,
              time: "2024-12-20 13:00",
              temp_c: 26.2,
              temp_f: 79.2,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 9.2,
              wind_kph: 14.8,
              wind_degree: 319,
              wind_dir: "NW",
              pressure_mb: 1010,
              pressure_in: 29.83,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 47,
              cloud: 0,
              feelslike_c: 26.7,
              feelslike_f: 80,
              windchill_c: 26.3,
              windchill_f: 79.3,
              heatindex_c: 26.7,
              heatindex_f: 80,
              dewpoint_c: 14,
              dewpoint_f: 57.3,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 10.6,
              gust_kph: 17,
              uv: 5.4,
            },
            {
              time_epoch: 1734683400,
              time: "2024-12-20 14:00",
              temp_c: 26.4,
              temp_f: 79.5,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 9.8,
              wind_kph: 15.8,
              wind_degree: 316,
              wind_dir: "NW",
              pressure_mb: 1009,
              pressure_in: 29.8,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 48,
              cloud: 0,
              feelslike_c: 26.9,
              feelslike_f: 80.3,
              windchill_c: 26.4,
              windchill_f: 79.5,
              heatindex_c: 26.9,
              heatindex_f: 80.3,
              dewpoint_c: 14.5,
              dewpoint_f: 58.1,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 11.3,
              gust_kph: 18.2,
              uv: 4,
            },
            {
              time_epoch: 1734687000,
              time: "2024-12-20 15:00",
              temp_c: 26.1,
              temp_f: 79,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 10.1,
              wind_kph: 16.2,
              wind_degree: 322,
              wind_dir: "NW",
              pressure_mb: 1009,
              pressure_in: 29.79,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 49,
              cloud: 0,
              feelslike_c: 26.7,
              feelslike_f: 80.1,
              windchill_c: 26.1,
              windchill_f: 79,
              heatindex_c: 26.7,
              heatindex_f: 80.1,
              dewpoint_c: 14.6,
              dewpoint_f: 58.3,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 11.9,
              gust_kph: 19.1,
              uv: 2.3,
            },
            {
              time_epoch: 1734690600,
              time: "2024-12-20 16:00",
              temp_c: 25.4,
              temp_f: 77.7,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 9.4,
              wind_kph: 15.1,
              wind_degree: 327,
              wind_dir: "NNW",
              pressure_mb: 1009,
              pressure_in: 29.79,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 51,
              cloud: 0,
              feelslike_c: 26.2,
              feelslike_f: 79.1,
              windchill_c: 25.4,
              windchill_f: 77.7,
              heatindex_c: 26.2,
              heatindex_f: 79.1,
              dewpoint_c: 14.5,
              dewpoint_f: 58.1,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 11.8,
              gust_kph: 18.9,
              uv: 0.9,
            },
            {
              time_epoch: 1734694200,
              time: "2024-12-20 17:00",
              temp_c: 24,
              temp_f: 75.2,
              is_day: 1,
              condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000,
              },
              wind_mph: 9.4,
              wind_kph: 15.1,
              wind_degree: 330,
              wind_dir: "NNW",
              pressure_mb: 1009,
              pressure_in: 29.8,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 56,
              cloud: 0,
              feelslike_c: 25.4,
              feelslike_f: 77.6,
              windchill_c: 24,
              windchill_f: 75.2,
              heatindex_c: 25.4,
              heatindex_f: 77.6,
              dewpoint_c: 14.6,
              dewpoint_f: 58.4,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 13.3,
              gust_kph: 21.4,
              uv: 0.2,
            },
            {
              time_epoch: 1734697800,
              time: "2024-12-20 18:00",
              temp_c: 22.7,
              temp_f: 72.8,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 8.3,
              wind_kph: 13.3,
              wind_degree: 331,
              wind_dir: "NNW",
              pressure_mb: 1010,
              pressure_in: 29.82,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 59,
              cloud: 0,
              feelslike_c: 24.8,
              feelslike_f: 76.6,
              windchill_c: 22.7,
              windchill_f: 72.8,
              heatindex_c: 24.8,
              heatindex_f: 76.6,
              dewpoint_c: 14.3,
              dewpoint_f: 57.8,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 14.1,
              gust_kph: 22.7,
              uv: 0,
            },
            {
              time_epoch: 1734701400,
              time: "2024-12-20 19:00",
              temp_c: 22.4,
              temp_f: 72.3,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 8.7,
              wind_kph: 14,
              wind_degree: 336,
              wind_dir: "NNW",
              pressure_mb: 1011,
              pressure_in: 29.85,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 61,
              cloud: 0,
              feelslike_c: 24.7,
              feelslike_f: 76.4,
              windchill_c: 22.4,
              windchill_f: 72.3,
              heatindex_c: 24.7,
              heatindex_f: 76.4,
              dewpoint_c: 14.4,
              dewpoint_f: 58,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 15.4,
              gust_kph: 24.8,
              uv: 0,
            },
            {
              time_epoch: 1734705000,
              time: "2024-12-20 20:00",
              temp_c: 22.2,
              temp_f: 72,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 8.1,
              wind_kph: 13,
              wind_degree: 347,
              wind_dir: "NNW",
              pressure_mb: 1011,
              pressure_in: 29.86,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 61,
              cloud: 0,
              feelslike_c: 24.6,
              feelslike_f: 76.4,
              windchill_c: 22.2,
              windchill_f: 72,
              heatindex_c: 24.6,
              heatindex_f: 76.4,
              dewpoint_c: 14.4,
              dewpoint_f: 58,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 14.5,
              gust_kph: 23.4,
              uv: 0,
            },
            {
              time_epoch: 1734708600,
              time: "2024-12-20 21:00",
              temp_c: 21.9,
              temp_f: 71.4,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 6.7,
              wind_kph: 10.8,
              wind_degree: 358,
              wind_dir: "N",
              pressure_mb: 1011,
              pressure_in: 29.86,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 61,
              cloud: 0,
              feelslike_c: 21.9,
              feelslike_f: 71.4,
              windchill_c: 21.9,
              windchill_f: 71.4,
              heatindex_c: 24.5,
              heatindex_f: 76.2,
              dewpoint_c: 13.9,
              dewpoint_f: 57.1,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 12.5,
              gust_kph: 20.2,
              uv: 0,
            },
            {
              time_epoch: 1734712200,
              time: "2024-12-20 22:00",
              temp_c: 21.6,
              temp_f: 70.8,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 6,
              wind_kph: 9.7,
              wind_degree: 9,
              wind_dir: "N",
              pressure_mb: 1011,
              pressure_in: 29.86,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 60,
              cloud: 0,
              feelslike_c: 21.6,
              feelslike_f: 70.8,
              windchill_c: 21.6,
              windchill_f: 70.8,
              heatindex_c: 24.5,
              heatindex_f: 76.1,
              dewpoint_c: 13.4,
              dewpoint_f: 56.1,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 11.5,
              gust_kph: 18.4,
              uv: 0,
            },
            {
              time_epoch: 1734715800,
              time: "2024-12-20 23:00",
              temp_c: 21.2,
              temp_f: 70.2,
              is_day: 0,
              condition: {
                text: "Clear ",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000,
              },
              wind_mph: 5.6,
              wind_kph: 9,
              wind_degree: 22,
              wind_dir: "NNE",
              pressure_mb: 1011,
              pressure_in: 29.86,
              precip_mm: 0,
              precip_in: 0,
              snow_cm: 0,
              humidity: 58,
              cloud: 0,
              feelslike_c: 21.2,
              feelslike_f: 70.2,
              windchill_c: 21.2,
              windchill_f: 70.2,
              heatindex_c: 24.4,
              heatindex_f: 76,
              dewpoint_c: 12.7,
              dewpoint_f: 54.9,
              will_it_rain: 0,
              chance_of_rain: 0,
              will_it_snow: 0,
              chance_of_snow: 0,
              vis_km: 10,
              vis_miles: 6,
              gust_mph: 10.8,
              gust_kph: 17.4,
              uv: 0,
            },
          ],
        },
      ],
    },
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 text-white">
          <div className="max-w-4xl mx-auto rounded-lg  overflow-hidden ">
            <div className="p-8">
              <h2 className="text-2xl font-bold  mb-4 ">Hourly Forecast</h2>
              {weatherData.forecast.forecastday.map((weather, index) => (
                <div
                  key={index}
                  className="max-w-4xl mx-auto  rounded-xl overflow-hidden m-4"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h2 className="text-2xl font-bold ">{weather.date}</h2>
                        <p className="text-sm ">Epoch: {weather.date_epoch}</p>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={weather.day.condition.icon}
                          alt={weather.day.condition.text}
                          className="w-16 h-16"
                        />
                        <p className="ml-2 text-lg font-semibold">
                          {weather.day.condition.text}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Temperature
                        </h3>
                        <p>
                          Max: {weather.day.maxtemp_c}°C /{" "}
                          {weather.day.maxtemp_f}
                          °F
                        </p>
                        <p>
                          Min: {weather.day.mintemp_c}°C /{" "}
                          {weather.day.mintemp_f}
                          °F
                        </p>
                        <p>
                          Avg: {weather.day.avgtemp_c}°C /{" "}
                          {weather.day.avgtemp_f}
                          °F
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Wind & Precipitation
                        </h3>
                        <p>
                          Max Wind: {weather.day.maxwind_kph} km/h /{" "}
                          {weather.day.maxwind_mph} mph
                        </p>
                        <p>
                          Precipitation: {weather.day.totalprecip_mm} mm /{" "}
                          {weather.day.totalprecip_in} in
                        </p>
                        <p>Snow: {weather.day.totalsnow_cm} cm</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Visibility & Humidity
                        </h3>
                        <p>
                          Visibility: {weather.day.avgvis_km} km /{" "}
                          {weather.day.avgvis_miles} miles
                        </p>
                        <p>Humidity: {weather.day.avghumidity}%</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Precipitation Chance
                        </h3>
                        <p>Rain: {weather.day.daily_chance_of_rain}%</p>
                        <p>Snow: {weather.day.daily_chance_of_snow}%</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Additional Info
                      </h3>
                      <p>UV Index: {weather.day.uv}</p>
                      <p>Condition Code: {weather.day.condition.code}</p>
                    </div>
                  </div>
                  <div className="flex overflow-x-auto pb-4">
                    {weather.hour.map((hour, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-20 text-center mr-4"
                      >
                        <p>{hour.time.replace("T", " ".split(" ")[1])}</p>
                        <p className="text-2xl my-2">{hour.condition.code}</p>
                        <p className="font-semibold">
                          {hour.temp_c.toFixed(1)}°C
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forecastday;