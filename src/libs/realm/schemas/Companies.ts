import { Realm, createRealmContext } from '@realm/react'

type GenerateProps = {
  user_id: string;
  corporate_reason: string;
  fantasy_name: string;
  cnpj: string;
  address: string;
  zip_code: string;
  neighborhood: string;
  business_description: string;
  state: string;
  abbreviation: string;
  phone: string;
}

export class Companies extends Realm.Object<Companies> {
  _id!: string;
  user_id!: string;
  corporate_reason!: string;
  fantasy_name!: string;
  cnpj!: string;
  address!: string;
  zip_code!: string;
  neighborhood!: string;
  business_description!: string;
  state!: string;
  abbreviation!: string;
  phone!: string;
  created_at!: Date;
  updated_at!: Date;


  static generate({ 
    user_id,
    corporate_reason,
    fantasy_name,
    cnpj,
    address,
    zip_code,
    neighborhood,
    business_description,
    state,
    abbreviation,
    phone
  }: GenerateProps) {
    return {
      _id: new Realm.BSON.UUID(),
      user_id,
      corporate_reason,
      fantasy_name,
      cnpj,
      address,
      zip_code,
      neighborhood,
      business_description,
      state,
      abbreviation,
      phone,
      created_at: new Date(),
      updated_at: new Date(),
    }
  }

  static schema = {
    name: 'Companies',
    primaryKey: '_id',

    properties: {
      _id: 'uuid',
      user_id: {
        type: 'string',
        indexed: true,
      },
      corporate_reason: 'string',
      fantasy_name: 'string',
      cnpj: 'string',
      address: 'string',
      zip_code: 'string',
      neighborhood: 'string',
      business_description: 'string',
      state: 'string',
      abbreviation: 'string',
      phone: 'string',
      created_at: 'date',
      updated_at: 'date'
    }
  }
}