import { gql } from 'apollo-boost';
export default {
    GET_ALL_HOME: gql`
        {
            getAllHome {
                home_id
                home_name
                home_type
                price
                review_number
                review_rating
                guest_available_number
                thumbnail
            }
        }
    `,
};
