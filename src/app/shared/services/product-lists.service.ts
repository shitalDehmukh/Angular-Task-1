import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, map } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class ProductLists {

    baseUrl = `https://angular-task-1-3d932-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`;
    
    // counter  = new  BehaviorSubject<any>('a')
    constructor(private http: HttpClient) { }

    addProductsList(res: any) {
        return this.http.post(this.baseUrl, res)
    }
    getProductsList() {
        return this.http.get(this.baseUrl, {
            headers: new HttpHeaders({
                'name': 'Swayam'
            }),
            observe: 'body'
        }).pipe(map((jsonData: any) => {
            let arr = [];
            for (let data in jsonData) {
                arr.push({ ...jsonData[data], id: data })
            }
            // this.counter.next(arr)
            return arr;
        }))
    }
}