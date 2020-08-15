import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {ToastController} from "@ionic/angular";
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { from } from 'rxjs';
import {AuthService} from "../auth/auth.service"
import * as Questionaire from "./store/actions/questionaire"
import * as Auth from "./store/actions/auth"

@Component({
    selector: 'app-home',
    templateUrl: 'questions.page.html',
    styleUrls: ['./questions.page.scss']
})
export class QuestionsPage implements OnInit {

    public questionaire
    public user
    public _showStatements: boolean = false

    constructor(
      private store: Store<any>,
      private toastController: ToastController,
      private auth: AuthService,
      private router: Router
    ) {}

    ngOnInit() {
      from(Plugins.Storage.get({ key: 'authData' })).subscribe(response => {
        let user = JSON.parse(response.value)
        this.store.dispatch(new Auth.SetUser({user}))
      })

      this.store.select(state => state.questions.present).subscribe(response => {
        this.questionaire = response.questionaire
        this.user = response.auth.email
        if (response.message) {
          this.presentToast(response.message)
        }
        
      }, error => {
        console.log(error)
      })
    }

    get questions() {
      return this.questionaire.questions
    }

    get showStatements() {
      return this._showStatements
    }

    toggleQuestionsStatements = () => {
      this._showStatements = !this._showStatements
    }

    trackByFn(index,item) {
      return item
    }

    doReorder(ev: any) {
      // Before complete is called with the items they will remain in the
      // order before the drag
      
  
      // Finish the reorder and position the item in the DOM based on
      // where the gesture ended. Update the items variable to the
      // new order of items
      let { from, to } = ev.detail
      this.store.dispatch(new Questionaire.MoveQuestionDnD({dragIndex: from, dropIndex: to}))
      ev.detail.complete();
  
      // After complete is called the items will be in the new order

    }

    logout() {
      //this.store.dispatch(new Auth.SetUser({user: {}}))
      this.store.dispatch({type: 'LOGOUT'})
      this.auth.logout()
      this.router.navigateByUrl('/auth')
    }

    async presentToast(message: string) {
      const toast = await this.toastController.create({
          message: message,
          duration: 2000
      });
      toast.present();
    }
}