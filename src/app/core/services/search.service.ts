import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {StackOverflowResponse} from './StackOverflowResponse';
import {environment} from '../../../environments/environment';

@Injectable()
export class SearchService {

  private static readonly apiUrl =
    'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

  constructor(private http: Http) {
  }

  search(keyword: string): Observable<StackOverflowResponse> {
    if (environment.production) {
      return this.searchRequest(keyword);
    } else {
      return this.searchMock(keyword);
    }
  }

  private searchRequest(keyword: string): Observable<StackOverflowResponse> {
    return this.http.get(SearchService.apiUrl + keyword)
      .map((res: Response) => {
        const data = res.json();
        console.log('API USAGE: ' + data.quota_remaining + ' of ' + data.quota_max + ' requests available');
        return data as StackOverflowResponse;
      })
      .catch((err: Response) => Observable.of(err.json()));
  }

  private searchMock(keyword: string): Observable<StackOverflowResponse> {
    return new Observable<StackOverflowResponse>(subscriber => {
      subscriber.next({
        'items': [{
          'tags': ['typescript', 'typescript-generics', 'conditional-types'],
          'owner': {
            'reputation': 1,
            'user_id': 3934540,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/e0d095468681c60fe9d94b856b1007ee?s=128&d=identicon&r=PG&f=1',
            'display_name': 'govindarajan',
            'link': 'https://stackoverflow.com/users/3934540/govindarajan'
          },
          'is_answered': false,
          'view_count': 11,
          'answer_count': 0,
          'score': 0,
          'last_activity_date': 1610838341,
          'creation_date': 1610836647,
          'last_edit_date': 1610838341,
          'question_id': 65755453,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65755453/typescript-complains-that-it-cannot-assign-string-to-conditional-type-t-extends',
          'title': 'Typescript complains that it cannot assign string to conditional type `T extends ? string: null`'
        }, {
          'tags': ['arrays', 'typescript', 'types', 'parameters', 'typeerror'],
          'owner': {
            'reputation': 26,
            'user_id': 14726782,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/07afb83a74bbd0ce03614310d8d88209?s=128&d=identicon&r=PG&f=1',
            'display_name': 'Vatroslav Vrbanic',
            'link': 'https://stackoverflow.com/users/14726782/vatroslav-vrbanic'
          },
          'is_answered': false,
          'view_count': 12,
          'answer_count': 0,
          'score': 1,
          'last_activity_date': 1610837463,
          'creation_date': 1610837463,
          'question_id': 65755553,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65755553/typescript-convert-parameters-array-to-tuple-array',
          'title': 'TypeScript Convert Parameters Array to Tuple Array'
        }, {
          'tags': ['javascript', 'typescript'],
          'owner': {
            'reputation': 35,
            'user_id': 5786499,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/d6ec5f648505d04753a37b3c9f73187b?s=128&d=identicon&r=PG&f=1',
            'display_name': 'wendtl',
            'link': 'https://stackoverflow.com/users/5786499/wendtl'
          },
          'is_answered': false,
          'view_count': 39,
          'answer_count': 1,
          'score': 0,
          'last_activity_date': 1610836598,
          'creation_date': 1610832408,
          'question_id': 65754909,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65754909/check-if-variable-is-defined-in-typescript',
          'title': 'Check if variable is defined in Typescript?'
        }, {
          'tags': ['node.js', 'typescript', 'es6-modules'],
          'owner': {
            'reputation': 3058,
            'user_id': 1072410,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/2b5715635435f0c53703ff91817b8522?s=128&d=identicon&r=PG',
            'display_name': 'gianpi',
            'link': 'https://stackoverflow.com/users/1072410/gianpi'
          },
          'is_answered': false,
          'view_count': 14,
          'answer_count': 0,
          'score': 0,
          'last_activity_date': 1610835122,
          'creation_date': 1610829798,
          'last_edit_date': 1610835122,
          'question_id': 65754510,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65754510/typescript-declaration-file-for-an-external-npm-package-constructor',
          'title': 'Typescript declaration file for an external npm package - constructor'
        }, {
          'tags': ['typescript', 'typescript-generics'],
          'owner': {
            'reputation': 652,
            'user_id': 9718950,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/6caf09c57e8876d01f2401fd62fc90f1?s=128&d=identicon&r=PG&f=1',
            'display_name': 'Artem Bochkarev',
            'link': 'https://stackoverflow.com/users/9718950/artem-bochkarev'
          },
          'is_answered': true,
          'view_count': 26,
          'accepted_answer_id': 65738774,
          'answer_count': 1,
          'score': 1,
          'last_activity_date': 1610832804,
          'creation_date': 1610722475,
          'last_edit_date': 1610832804,
          'question_id': 65738348,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65738348/typescript-how-can-i-swap-object-key-value-and-get-valid-return-type-of-swap-fu',
          'title': 'Typescript: How can I swap object key value and get valid return type of swap function?'
        }, {
          'tags': ['eclipse', 'typescript'],
          'owner': {
            'reputation': 40989,
            'user_id': 239168,
            'user_type': 'registered',
            'accept_rate': 87,
            'profile_image': 'https://www.gravatar.com/avatar/7a3ea02e7284280e5df3d01a28a26af5?s=128&d=identicon&r=PG',
            'display_name': 'Eran Medan',
            'link': 'https://stackoverflow.com/users/239168/eran-medan'
          },
          'is_answered': true,
          'view_count': 27629,
          'closed_date': 1381828189,
          'accepted_answer_id': 17990853,
          'answer_count': 5,
          'score': 67,
          'last_activity_date': 1610832788,
          'creation_date': 1349188243,
          'question_id': 12692306,
          'link': 'https://stackoverflow.com/questions/12692306/eclipse-plugin-for-typescript',
          'closed_reason': 'Not suitable for this site',
          'title': 'Eclipse plugin for TypeScript?'
        }, {
          'tags': ['reactjs', 'typescript', 'redux'],
          'owner': {
            'reputation': 13,
            'user_id': 14556344,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/ce230b616f658f74a614f45aad303c24?s=128&d=identicon&r=PG&f=1',
            'display_name': 'dd0sxx',
            'link': 'https://stackoverflow.com/users/14556344/dd0sxx'
          },
          'is_answered': true,
          'view_count': 25,
          'answer_count': 1,
          'score': 1,
          'last_activity_date': 1610832741,
          'creation_date': 1610832015,
          'last_edit_date': 1610832045,
          'question_id': 65754846,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65754846/how-do-i-specify-an-array-with-multiple-objects-in-a-typescript-interface',
          'title': 'How do I specify an array with multiple objects in a TypeScript interface?'
        }, {
          'tags': ['graphql', 'code-generation', 'apollo', 'apollo-angular', 'graphql-codegen'],
          'owner': {
            'reputation': 127,
            'user_id': 9139929,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/8eabc0fc0e4fa88337002e88f876aa7c?s=128&d=identicon&r=PG&f=1',
            'display_name': 'L. Berger',
            'link': 'https://stackoverflow.com/users/9139929/l-berger'
          },
          'is_answered': false,
          'view_count': 7,
          'answer_count': 0,
          'score': -1,
          'last_activity_date': 1610830173,
          'creation_date': 1610830173,
          'question_id': 65754566,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65754566/dealing-with-really-long-names-of-types-generated-by-graphql-codegen-typescript',
          'title': 'Dealing with really long names of types generated by @graphql-codegen/typescript-operations?'
        }, {
          'tags': ['typescript', 'mongoose'],
          'owner': {
            'reputation': 305,
            'user_id': 4777674,
            'user_type': 'registered',
            'accept_rate': 75,
            'profile_image': 'https://www.gravatar.com/avatar/7e4e3b0b132c9d7516dd2eb242bd4449?s=128&d=identicon&r=PG&f=1',
            'display_name': 'Enuff',
            'link': 'https://stackoverflow.com/users/4777674/enuff'
          },
          'is_answered': false,
          'view_count': 9,
          'answer_count': 0,
          'score': 0,
          'last_activity_date': 1610826911,
          'creation_date': 1610826911,
          'question_id': 65754046,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65754046/typescript-and-mongoose-returning-any-type-on-find-queries',
          'title': 'Typescript and mongoose returning &quot;any&quot; type on find queries'
        }, {
          'tags': ['angular', 'typescript', 'localization', 'internationalization'],
          'owner': {
            'reputation': 11,
            'user_id': 6761625,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/baa9bbe7b7c3350a1ddb7e367fe1fe7a?s=128&d=identicon&r=PG&f=1',
            'display_name': 'Nida',
            'link': 'https://stackoverflow.com/users/6761625/nida'
          },
          'is_answered': true,
          'view_count': 229,
          'accepted_answer_id': 64605978,
          'answer_count': 3,
          'score': 0,
          'last_activity_date': 1610826478,
          'creation_date': 1604050742,
          'last_edit_date': 1604051118,
          'question_id': 64605879,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/64605879/extracting-localize-messages-from-typescript-not-working-in-angular-9',
          'title': 'Extracting $localize messages from typescript not working in Angular 9'
        }, {
          'tags': ['javascript', 'node.js', 'typescript', 'express'],
          'owner': {
            'reputation': 816,
            'user_id': 12954914,
            'user_type': 'registered',
            'profile_image': 'https://i.stack.imgur.com/u248d.jpg?s=128&g=1',
            'display_name': 'Karan Kumar',
            'link': 'https://stackoverflow.com/users/12954914/karan-kumar'
          },
          'is_answered': false,
          'view_count': 17,
          'answer_count': 2,
          'score': 1,
          'last_activity_date': 1610823300,
          'creation_date': 1610818245,
          'question_id': 65752539,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65752539/typescript-mongoose-cast-to-objectid-failed-for-value-at-path-id',
          'title': 'Typescript: Mongoose cast to ObjectId failed for value at path “_id”'
        }, {
          'tags': ['typescript', 'architecture', 'dependencies'],
          'owner': {
            'reputation': 2521,
            'user_id': 2029097,
            'user_type': 'registered',
            'accept_rate': 100,
            'profile_image': 'https://www.gravatar.com/avatar/3928e7e4f8a49d3315c420527320259c?s=128&d=identicon&r=PG',
            'display_name': 'hlfrmn',
            'link': 'https://stackoverflow.com/users/2029097/hlfrmn'
          },
          'is_answered': true,
          'view_count': 2574,
          'accepted_answer_id': 52582023,
          'answer_count': 2,
          'score': 10,
          'last_activity_date': 1610821200,
          'creation_date': 1538323730,
          'question_id': 52579681,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/52579681/typescript-prevent-imports-from-certain-directory-in-project',
          'title': 'Typescript prevent imports from certain directory in project'
        }, {
          'tags': ['typescript'],
          'owner': {
            'reputation': 605,
            'user_id': 1543574,
            'user_type': 'registered',
            'profile_image': 'https://www.gravatar.com/avatar/04423ce568aca3db327a06a12cc5a662?s=128&d=identicon&r=PG',
            'display_name': 'user1543574',
            'link': 'https://stackoverflow.com/users/1543574/user1543574'
          },
          'is_answered': false,
          'view_count': 21,
          'answer_count': 0,
          'score': 0,
          'last_activity_date': 1610820702,
          'creation_date': 1610820702,
          'question_id': 65752975,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65752975/typescript-is-there-a-consistent-logic-behind-how-the-engine-infers-and-how-it',
          'title': 'Typescript - Is there a consistent logic behind how the engine infers and how it applies the inferrence?'
        }, {
          'tags': ['reactjs', 'typescript', 'redux', 'redux-saga'],
          'owner': {
            'reputation': 1,
            'user_id': 7814478,
            'user_type': 'registered',
            'profile_image': 'https://graph.facebook.com/1280045038768520/picture?type=large',
            'display_name': 'Theo',
            'link': 'https://stackoverflow.com/users/7814478/theo'
          },
          'is_answered': false,
          'view_count': 17,
          'answer_count': 1,
          'score': 0,
          'last_activity_date': 1610819717,
          'creation_date': 1610655115,
          'last_edit_date': 1610819717,
          'question_id': 65726235,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65726235/react-redux-saga-using-typescript-hitting-1-api-point-to-get-paginated-and-non',
          'title': 'React, Redux Saga using Typescript hitting 1 API Point to get paginated and non paginated data'
        }, {
          'tags': ['angular', 'typescript', 'firebase', 'angularfire2'],
          'owner': {
            'reputation': 15709,
            'user_id': 397830,
            'user_type': 'registered',
            'accept_rate': 74,
            'profile_image': 'https://www.gravatar.com/avatar/23830a9037cb8e435a15c3261038b079?s=128&d=identicon&r=PG',
            'display_name': 'J4N',
            'link': 'https://stackoverflow.com/users/397830/j4n'
          },
          'is_answered': false,
          'view_count': 29,
          'answer_count': 0,
          'score': 0,
          'last_activity_date': 1610819470,
          'creation_date': 1610818343,
          'last_edit_date': 1610819470,
          'question_id': 65752553,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65752553/why-typescript-cannot-import-type-user-from-firebase',
          'title': 'Why typescript cannot import type user from firebase?'
        }, {
          'tags': ['reactjs', 'typescript'],
          'owner': {
            'reputation': 313,
            'user_id': 8967303,
            'user_type': 'registered',
            'profile_image': 'https://lh5.googleusercontent.com/-rUfp2jrSsdc/AAAAAAAAAAI/AAAAAAAAAQg/iSE_q6SkL1E/photo.jpg?sz=128',
            'display_name': 'Kiran S youtube channel',
            'link': 'https://stackoverflow.com/users/8967303/kiran-s-youtube-channel'
          },
          'is_answered': false,
          'view_count': 79,
          'answer_count': 0,
          'score': 1,
          'last_activity_date': 1610817874,
          'creation_date': 1610817874,
          'question_id': 65752472,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65752472/react-typescript-element-is-not-assignable-to-type',
          'title': 'React typescript Element&#39; is not assignable to type'
        }, {
          'tags': ['typescript'],
          'owner': {
            'reputation': 7491,
            'user_id': 347484,
            'user_type': 'registered',
            'accept_rate': 98,
            'profile_image': 'https://i.stack.imgur.com/H60ZG.jpg?s=128&g=1',
            'display_name': 'Boppity Bop',
            'link': 'https://stackoverflow.com/users/347484/boppity-bop'
          },
          'is_answered': true,
          'view_count': 15,
          'accepted_answer_id': 65752139,
          'answer_count': 1,
          'score': 0,
          'last_activity_date': 1610816085,
          'creation_date': 1610815590,
          'question_id': 65752034,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65752034/inline-syntax-for-new-object-of-interface-in-typescript',
          'title': 'Inline syntax for new object of interface in Typescript'
        }, {
          'tags': ['typescript', 'express', 'types'],
          'owner': {
            'reputation': 2424,
            'user_id': 1560865,
            'user_type': 'registered',
            'accept_rate': 62,
            'profile_image': 'https://www.gravatar.com/avatar/5f7d9f360c30e477ff349a2b49841632?s=128&d=identicon&r=PG',
            'display_name': 'Hauke P.',
            'link': 'https://stackoverflow.com/users/1560865/hauke-p'
          },
          'is_answered': false,
          'view_count': 21,
          'answer_count': 1,
          'score': 0,
          'last_activity_date': 1610815792,
          'creation_date': 1610794409,
          'last_edit_date': 1610815792,
          'question_id': 65748841,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65748841/express-js-typescript-how-to-simplify-parameter-types-for-app-use-callback-fo',
          'title': 'Express.js &amp; TypeScript: How to simplify parameter types for app.use callback for error handling'
        }, {
          'tags': ['javascript', 'typescript', 'enums'],
          'owner': {
            'reputation': 2634,
            'user_id': 5476434,
            'user_type': 'registered',
            'accept_rate': 75,
            'profile_image': 'https://i.stack.imgur.com/CU3fZ.png?s=128&g=1',
            'display_name': 'Tim Schoch',
            'link': 'https://stackoverflow.com/users/5476434/tim-schoch'
          },
          'is_answered': true,
          'view_count': 139700,
          'accepted_answer_id': 47755096,
          'answer_count': 11,
          'score': 201,
          'last_activity_date': 1610814913,
          'creation_date': 1493986824,
          'question_id': 43804805,
          'content_license': 'CC BY-SA 3.0',
          'link': 'https://stackoverflow.com/questions/43804805/check-if-value-exists-in-enum-in-typescript',
          'title': 'Check if value exists in enum in TypeScript'
        }, {
          'tags': ['angular', 'typescript', 'webpack', 'angular-compiler', 'angular-builder'],
          'owner': {
            'reputation': 565,
            'user_id': 3800647,
            'user_type': 'registered',
            'accept_rate': 86,
            'profile_image': 'https://i.stack.imgur.com/8Jqf4.jpg?s=128&g=1',
            'display_name': 'rkalita',
            'link': 'https://stackoverflow.com/users/3800647/rkalita'
          },
          'is_answered': false,
          'view_count': 22,
          'answer_count': 0,
          'score': 0,
          'last_activity_date': 1610814782,
          'creation_date': 1610814782,
          'question_id': 65751894,
          'content_license': 'CC BY-SA 4.0',
          'link': 'https://stackoverflow.com/questions/65751894/edit-typescript-before-angular-compiler',
          'title': 'Edit typescript before angular compiler'
        }], 'has_more': true, 'quota_max': 300, 'quota_remaining': 285
      });
      subscriber.complete();
    });
  }

}
