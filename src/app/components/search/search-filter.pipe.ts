import { PipeTransform, Pipe } from '@angular/core';
import { Locations } from 'src/app/common/interfaces';

@Pipe({
    name: 'cantonFilter'
})
export class UserSignUpCantonFilter implements PipeTransform {
    transform(location: Locations[], searchTerm: string): Locations[] {
        return location.filter(location => location.canton == searchTerm);
    }
}