import { PipeTransform, Pipe } from '@angular/core';
import { Locations } from 'src/app/common/interfaces';

@Pipe({
    name: 'provinceFilter'
})
export class UserSignUpProvinceFilter implements PipeTransform {
    transform(location: Locations[], searchTerm: string): Locations[] {
        return location.filter(location => location.provincia === searchTerm);
    }
}

@Pipe({
    name: 'cantonFilter'
})
export class UserSignUpCantonFilter implements PipeTransform {
    transform(location: Locations[], searchTerm: string): Locations[] {
        return location.filter(location => location.canton === searchTerm);
    }
}

@Pipe({
    name: 'uniqueCanton'
})
export class uniqueCantonFilter implements PipeTransform {
    transform(locations: Locations[], args?: any): string[] {
        let filteredLocations: string[] = [];
        for (let location of locations) {
            if (!filteredLocations.includes(location.canton)) {
                filteredLocations.push(location.canton);
            }
        }
        return filteredLocations;
    }
}

@Pipe({
    name: 'uniqueDistrict'
})
export class uniqueDistrictFilter implements PipeTransform {
    transform(locations: Locations[], args?: any): string[] {
        let filteredLocations: string[] = [];
        for (let location of locations) {
            if (!filteredLocations.includes(location.distrito)) {
                filteredLocations.push(location.distrito);
            }
        }
        return filteredLocations;
    }
}
@Pipe({
    name: 'uniqueProvince'
})
export class uniqueProvinceFilter implements PipeTransform {
    transform(locations: Locations[], args?: any): string[] {
        let filteredLocations: string[] = [];
        for (let location of locations) {
            if (!filteredLocations.includes(location.provincia)) {
                filteredLocations.push(location.provincia);
            }
        }
        return filteredLocations;
    }
}
